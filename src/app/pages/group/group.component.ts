import { Component } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {
  list: Array<number> = [1, 2, 3, 4, 5];
}
