import { Component, OnInit } from '@angular/core';
import { faFile, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  faFile = faFile;
  faPlus = faPlus;
  list: Array<number> = [1,2,3,4,5];
  logged: boolean = false;
  userName: string = '';
  urlAvt: string = '';
  listGroup: Array<any> = [];
  
  constructor(
    private commonService: CommonService,
    private router: Router,
    private authService: AuthService,
    private groupService: GroupService
  ){}

  //handle change typeHeader
  handleChangeTypeHeader(type: string){
    this.commonService.typeHeader.next(type);
  }

  ngOnInit(): void {
      //handle user information
      this.commonService.logged.subscribe(logged => this.logged = logged);
      if (!this.logged){
        this.router.navigate(['/login']);
      }
      this.userName = this.authService.userName;
      if (this.authService.gender === 'male'){
        this.urlAvt = '../../../assets/avatar-male-1.png';
      }else{
        this.urlAvt = '../../../assets/avatar-female-1.png';
      }
      //handle list groups
      this.groupService.getAllGroups().subscribe(
        (result) => {
          console.log(result);
          this.listGroup = result.slice();
        },
        (err) => {console.log(err);}
      )

  }
}
