import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-assignment',
  templateUrl: './detail-assignment.component.html',
  styleUrls: ['./detail-assignment.component.scss']
})
export class DetailAssignmentComponent {
  onBack(): void {
    console.log('onBack');
  }
}
