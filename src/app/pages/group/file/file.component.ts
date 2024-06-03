import { Component } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NewFolderComponent } from '../new-folder/new-folder.component';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { DeleteFileComponent } from '../delete-file/delete-file.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from 'src/app/services/file.service';
import { NotificationService } from 'src/app/services/notification.service';

interface FileNode {
  name: string;
  time: string;
  path: string;
  child: FileNode[];
}
function buildTree(files: { name: string; time: string }[]): FileNode {
  const root: FileNode = { name: 'File', time: '', child: [], path: 'File/' };
  const map: { [key: string]: FileNode } = { 'File': root };

  files.forEach(file => {
    const parts = file.name.split('/').filter(part => part); // Loại bỏ các phần tử rỗng
    let current = root;

    parts.forEach((part, index) => {
      if (!map[part]) {
        const node: FileNode = {
          name: part,
          time: index === parts.length - 1 ? file.time : '',
          child: [],
          path: file.name
        };
        map[part] = node;
        current.child.push(node);
      }
      current = map[part];
    });
  });

  return root;
}
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})

export class FileComponent {

  modalRefAnt?: NzModalRef;
  groupId: any;
  path: string[] = [];
  listFile: any = [];
  loading: boolean = false;
  listOfData: any[] = [];
  rawData: any;

  constructor(
    private modalService: NzModalService,
    private route: ActivatedRoute,
    private router: Router,
    private fileSrv: FileService,
  ) { }

  ngOnInit(){
    this.loading = true;
    this.groupId = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData(){
    this.fileSrv.getFile({ groupId: this.groupId}, 
      (res: any) => {
        if(res){
          this.rawData = res.data.files;
          this.listFile = res.data.files.length > 0 ? buildTree(res.data.files) : null;
          this.listOfData = this.listFile ? this.listFile.child[0].child : [];
          // console.log(this.listOfData);
          // console.log(res.data)
          this.loading = false;
        }
      }
    )
  }

  onBack() {
    this.router.navigate(['/group/detail/' + this.groupId]);
  }

  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  openNewFolder() {
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'New Folder',
      nzContent: NewFolderComponent,
      nzFooter: null,
      nzData: {path: this.path, groupId: this.groupId, files: this.rawData},
      nzWidth: 500,
      nzCentered: true
    })

    this.modalRefAnt.afterClose.subscribe((status) => {
      if(status){
        this.listFile = buildTree(this.rawData);
        this.listOfData = this.listFile ? this.listFile.child[0].child : [];
      }
    })
  }

  openUpload() {
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Upload File',
      nzContent: UploadFileComponent,
      nzFooter: null,
      nzData: {path: this.path, groupId: this.groupId},
      nzWidth: 600,
      nzCentered: true
    })

    this.modalRefAnt.afterClose.subscribe(status => {
      if(status){
        this.getData();
      }
    })
  }

  openConfirmDelete(item: any) {
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Confirm Delete',
      nzContent: DeleteFileComponent,
      nzFooter: null,
      nzData: item,
      nzWidth: 500,
      nzCentered: true
    })

    this.modalRefAnt.afterClose.subscribe(status => {
      if(status){
        this.getData();
      }
    })
  }

  getFileExtensionOrFolderName(filename: string): string {
    const parts = filename.split('.');
    if (parts.length > 1) {
      return `.${parts[parts.length - 1]}`; // Trả về phần mở rộng của tệp
    }
    return 'Folder'; // Nếu không có phần mở rộng, đây là một thư mục
  }

  handleClick(item: any){
    if(this.getFileExtensionOrFolderName(item.name) == 'Folder'){
      this.path.push(item.name);
      this.listOfData = item.child;
    }else{
      this.downloadFile(item);
    }
  }

  handleClickBread(){
    this.path = [];
    this.listOfData = this.listFile.child[0].child;
  }

  downloadFile(item: any){
    this.fileSrv.downloadFile(
      { filePath: item.path, fileName: item.name},
      (res: any) => {
        if(res){
          window.open(res.data.link, '_blank');
        }
      }
    )
  }

}
