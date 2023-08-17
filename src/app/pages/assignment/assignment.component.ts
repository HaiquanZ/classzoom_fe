import { Component } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent {
  faFile = faFile;
  list: Array<number> = [1, 2, 3, 4, 5];
}
