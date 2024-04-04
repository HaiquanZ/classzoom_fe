import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-sub-task',
  templateUrl: './detail-sub-task.component.html',
  styleUrls: ['./detail-sub-task.component.scss']
})
export class DetailSubTaskComponent {

  time: Date | null = null;
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);

  date = null;
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  status= 'Done';
  message = 'This message about task which you want to say.'
}
