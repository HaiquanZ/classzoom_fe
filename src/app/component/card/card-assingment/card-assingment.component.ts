import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-assingment',
  templateUrl: './card-assingment.component.html',
  styleUrls: ['./card-assingment.component.scss']
})
export class CardAssingmentComponent {
  @Input() data: any;
}
