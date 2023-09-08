import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-owner-assignment',
  templateUrl: './owner-assignment.component.html',
  styleUrls: ['./owner-assignment.component.scss']
})
export class OwnerAssignmentComponent implements OnInit{
  constructor(
    private commonService: CommonService
  ){}

  ngOnInit(): void {
      this.commonService.typeHeader.next('assignment');
  }
}
