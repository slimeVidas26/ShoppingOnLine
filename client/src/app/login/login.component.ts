import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { UserService } from '../user.service';
import {Router } from '@angular/router';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  username:string = '';
  password:string = '';
  

  constructor(private _userService: UserService,   private _router : Router) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ])
    });
  }

  doLogin() {
    console.log(this.formGroup);
   
      if(this.username && this.password ) {
        //this.loginmsg.text = 'Logging, please wait...';
        this._userService.login(this.username,this.password);
      }
    
  }

}
