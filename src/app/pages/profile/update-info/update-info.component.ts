import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.scss']
})
export class UpdateInfoComponent {

  constructor(
    private fb: NonNullableFormBuilder
  ){}

  updateForm: FormGroup<{
    name: FormControl<string>;
    bio: FormControl<string>;
    phone: FormControl<string>;
    gender: FormControl<string>;
  }> = this.fb.group({
    name: ['', [Validators.required]],
    bio: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    gender: ['', [Validators.required]]
  });

  update(){
    if (this.updateForm.valid) {
      console.log(this.updateForm.value);
    } else {
      Object.values(this.updateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
