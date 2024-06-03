import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent {
  @Input() data: any;
  background = 'background-image: url(https://i.imgur.com/Hj6VLrM.jpeg);';
  isAdmin: boolean = false;

  ngOnInit(){
    let item = this.data.members.find((item: any) => item.id === localStorage.getItem('userId'));
    this.isAdmin = item.isAdmin;
    if(this.data.img){
      this.background = 'background-image: url(' + this.data.img + ');';
    }
  }

}
