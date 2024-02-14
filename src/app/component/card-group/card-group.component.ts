import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent {
  @Input() data: any;

  ngOnInit(){
    // console.log('this: ', this.data);
  }

}
