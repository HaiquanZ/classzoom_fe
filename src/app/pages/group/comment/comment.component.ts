import { Component, Input } from '@angular/core';
import { addDays, formatDistance } from 'date-fns';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() listCmt: any;
  data: any[] = [];

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

  getFirstLetterCapitalized(input: string): string {
    if (!input) {
        return ''; // Return an empty string if the input is empty or undefined
    }

    return input.charAt(0).toUpperCase();
}

  ngOnInit() {
    this.listCmt.forEach((ele: any) => {
      this.data.push(ele);
    });
  }
}
