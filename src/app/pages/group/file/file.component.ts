import { Component } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NewFolderComponent } from '../new-folder/new-folder.component';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { DeleteFileComponent } from '../delete-file/delete-file.component';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {

  modalRefAnt?: NzModalRef;

  constructor(
    private modalService: NzModalService
  ) { }

  onBack() {

  }

  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  listOfData = [
    {
      id: 1,
      name: 'John Brown',
      age: 32,
      expand: false,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
      id: 2,
      name: 'Jim Green',
      age: 42,
      expand: false,
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 32,
      expand: false,
      address: 'Sidney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
    }
  ];

  openNewFolder() {
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'New Folder',
      nzContent: NewFolderComponent,
      nzFooter: null,
      nzData: null,
      nzWidth: 600,
      nzCentered: true
    })
  }

  openUpload() {
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Upload File',
      nzContent: UploadFileComponent,
      nzFooter: null,
      nzData: null,
      nzWidth: 600,
      nzCentered: true
    })
  }

  openConfirmDelete() {
    this.modalRefAnt = this.modalService.create({
      nzTitle: 'Confirm Delete',
      nzContent: DeleteFileComponent,
      nzFooter: null,
      nzData: null,
      nzWidth: 600,
      nzCentered: true
    })
  }
}
