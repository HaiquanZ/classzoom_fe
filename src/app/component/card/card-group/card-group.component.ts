import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent {
  @Input() data: any;
  background: any;

  ngOnInit(){
    console.log('this: ', this.data);
    this.background = `background-image: url(https://i.pinimg.com/736x/6e/51/ab/6e51abfb7cd9d5b6a58ca04ab3aba764.jpg); `
  }

}
