import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged:any = null; 

  constructor(private _userService: UserService) { 
    this.logged = this._userService.logged;
  }

  ngOnInit() {
  }

  doLogout() {
    this._userService.doLogout();
    return false;
  }

  dispUserName() {
    let u = '';
    if(this.logged.token) {
      u = this.logged.user.first_name;
     
    }
    return u;
  }

  dispUserMail() {
    let m = '';
    if(this.logged.token) {
      m= this.logged.user.username;
     
    }
    return m;
  }

  dispUserId() {
    let i = '';
    if(this.logged.token) {
      i = this.logged.user._id;
      
    }
    return i;
  }

}
