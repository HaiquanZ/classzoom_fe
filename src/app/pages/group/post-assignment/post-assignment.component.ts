import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  ngOnInit() {
    // console.log(this.data);
  }

  inputValue = '';

  viewDetail(){
    this.router.navigate([`/assignment/detail/${this.data._id}`]);
  }

  timeAgo(isoDateString: string): string {
    const now: Date = new Date();
    const past: Date = new Date(isoDateString);
  
    const diffInMs: number = now.getTime() - past.getTime();
    const diffInMinutes: number = Math.floor(diffInMs / (1000 * 60));
    const diffInHours: number = Math.floor(diffInMinutes / 60);
    const diffInDays: number = Math.floor(diffInHours / 24);
  
    if (diffInMinutes < 1) {
      return "just now";
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      return `${diffInDays} days ago`;
    }
  }
}
