import { Component } from '@angular/core';
import { faPenToSquare, faSquarePhone, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.scss']
})
export class DetailGroupComponent {
  faPenToSquare = faPenToSquare;
  faSquarePhone = faSquarePhone;
  faGear = faGear;
  list: Array<number> = [1,2,3,4,5]
}
