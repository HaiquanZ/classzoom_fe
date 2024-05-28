import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-new-folder',
  templateUrl: './new-folder.component.html',
  styleUrls: ['./new-folder.component.scss']
})
export class NewFolderComponent {

  constructor(
    private modal: NzModalRef<NewFolderComponent>,
    private fb: NonNullableFormBuilder,
    @Inject(NZ_MODAL_DATA) public data: any,
  ){}

  createForm: FormGroup<{
    name: FormControl<string>;
  }> = this.fb.group({
    name: ['',[Validators.required]]
  });

  close(e: any){
    this.modal.close();
  }

  create(){
    if (this.createForm.valid) {
      
    } else {
      Object.values(this.createForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
