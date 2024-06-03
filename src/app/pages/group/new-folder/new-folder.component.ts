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
  ) { }

  createForm: FormGroup<{
    name: FormControl<string>;
  }> = this.fb.group({
    name: ['', [Validators.required]]
  });

  close(e: any) {
    this.modal.close();
  }

  create() {
    if (this.createForm.valid) {
      this.data.files.push();
      let filePath = 'File/';
      filePath = filePath + this.data.groupId;
      this.data.path.forEach((item: any) => filePath += ('/' + item));
      filePath += '/' + this.createForm.value.name + '/';
      this.data.files.push({ name: filePath, time: new Date() })
      this.modal.close(true)
      // console.log(filePath);
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
