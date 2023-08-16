import { Component } from '@angular/core';
import { faFile, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faFile = faFile;
  faPlus = faPlus;
  list: Array<number> = [1,2,3,4,5];
}
