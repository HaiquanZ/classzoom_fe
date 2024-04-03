import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { formatDistance } from 'date-fns';

@Component({
  selector: 'app-post-assignment',
  templateUrl: './post-assignment.component.html',
  styleUrls: ['./post-assignment.component.scss']
})
export class PostAssignmentComponent {
  @Input() data: any;

  constructor(
    private router: Router,
  ){}

  Data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '';

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.Data = [
        ...this.Data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: formatDistance(new Date(), new Date())
        }
      ].map(e => ({
        ...e,
        displayTime: formatDistance(new Date(), e.datetime)
      }));
    }, 800);
  }

  viewDetail(id: string){
    this.router.navigate([`/assignment/detail/${id}`]);
  }
}
