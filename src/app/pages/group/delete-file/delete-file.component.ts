import { Component } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-delete-file',
  templateUrl: './delete-file.component.html',
  styleUrls: ['./delete-file.component.scss']
})
export class DeleteFileComponent {
  constructor(
    private modal: NzModalRef<DeleteFileComponent>
  ){}

  close(){
    this.modal.close();
  }

  delete(){
    
  }
}
