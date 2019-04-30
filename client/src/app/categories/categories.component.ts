import { Component, OnInit , Input , EventEmitter } from '@angular/core';
import {Router, ParamMap} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { Category } from '../category';
import {UserService } from '../user.service';


@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
    inputs : ['categories'],
    outputs : ['selectCategory']
})
export class CategoriesComponent implements OnInit {
  //@Input('parentData') public categories ;
  public categoryId;
  public selectCategory = new EventEmitter();
  logged:any = null;

  constructor(   private router : Router,
                 private route : ActivatedRoute,
                 private _userService: UserService) {
                  this.logged = this._userService.logged;
                  }

  ngOnInit() {
     
  }

  

  onSelect(cat :Category ){
if(this.logged.user.role=="Admin"){
    this.router.navigate(['/admin/category' , cat._id]);
  }
  else{
    this.router.navigate(['/shop/category' , cat._id]);
  }
  this.selectCategory.emit(cat);
  }

   
  

}
