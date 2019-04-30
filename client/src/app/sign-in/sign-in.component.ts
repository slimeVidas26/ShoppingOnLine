import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { City } from '../city';
import {Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrderService} from '../order.service';




@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  formGroup: FormGroup;
  formGroup1: FormGroup;
  tmp:any = {};
  createParams:any = {};
  nextStep:any = true;

   cities = [
     new City(1, 'Tel-aviv' ),
     new City(2, 'Jerusalem' ),
     new City(3, 'Haifa' ),
     new City(4, 'Hertzelia'),
     new City(5, 'Raanana' ),
     new City(6, 'Eilat' ),
     new City(7, 'Natania' ),
     new City(8, 'Hod Hasharon')
  ];
  

  constructor(private _userService: UserService,private _orderService: OrderService,
       private _router : Router) { }

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
      ]),
      PasswordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      ID: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9)
      ])
      
    });
    
    
    this.formGroup1 = new FormGroup({
      city: new FormControl(null, [
        
       
      ]),
      adress: new FormControl('', [
        Validators.required
       
      ]),
      first_name: new FormControl('', [
        Validators.required
    
      ]),
      last_name: new FormControl('', [
        Validators.required
     
      ]),
    });
  }

  
 
  

  checkUserStepOne(){
    this.nextStep = false;
  this.createParams = {
  ID: this.tmp.ID.trim(),
  username: this.tmp.username.trim(),
  password: this.tmp.password.trim(),
  passwordConfirm: this.tmp.passwordConfirm.trim()
}

  if(this.createParams.password != this.createParams.passwordConfirm){
    alert('Password do not match');
  }
  else{
    console.log(this.createParams)
    console.log(this.formGroup);
    return this.createParams;
  }
  }

createNewUser(){
  
  this.createParams.city =this.tmp.city.trim(); 
  this.createParams.adress =this.tmp.adress.trim(); 
  this.createParams.first_name =this.tmp.first_name.trim(); 
  this.createParams.last_name =this.tmp.last_name.trim(); 
  console.log('params',this.createParams)
    this._userService.createUser(this.createParams).subscribe( 
      result => {
        console.log(result);
      },
      error => {
        alert('error!');
      }
     
    ),
    this._router.navigate(['/home']);
   

}

}
