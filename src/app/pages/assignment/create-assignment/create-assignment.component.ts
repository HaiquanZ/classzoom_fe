import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.scss']
})
export class CreateAssignmentComponent implements OnInit{
  //@ts-ignore
  createAssignmentForm: FormGroup;

  constructor(
    private commonService: CommonService,
  ){}

  initForm(){
    this.createAssignmentForm = new FormGroup({
      content: new FormControl('', [Validators.required]),
      dueto: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
      this.commonService.typeHeader.next('assignment');
      this.initForm();
  }

  createAssignment(){
    console.log(this.createAssignmentForm.value);
    
  }
}
