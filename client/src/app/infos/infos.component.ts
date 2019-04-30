import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import { UserService } from '../user.service';


@Component({
  selector: 'infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  logged:any = null; 
  counter:number;

  constructor( private _productsService: ProductsService,
    private _userService: UserService) {
      this.logged = this._userService.logged;
     }

  ngOnInit() {
   
  }
  

   countProducts() {
    // this._productsService.getCountProducts().subscribe(
    //   result => {
    //     this.counter = result;       
    //   },
    //   err => {
    //     console.log(err)
    //   }     
    // )
  }

   dispUserName() {
    let u = '';
    if(this.logged.token) {
      u = this.logged.user.first_name;
     
    }
    return u;
  }

  createdCart() {
    let c = '';
    if(this.logged.token) {
      c = this.logged.user.created;
     
    }
    return c;
  }

  

   

  

}
