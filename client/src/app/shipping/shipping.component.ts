import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {OrderService} from '../order.service';
import { UserService } from '../user.service';
import {Router } from '@angular/router';
import { City } from '../city';
import {FormControl, FormGroup, Validators} from "@angular/forms";






@Component({
  selector: 'shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  closeResult: string;
  formGroup: FormGroup;
  tmp:any = {};
  createParams:any = {user:null,
                      cart:null,
                      total_amount:null,
                      delivery_date:null};
  logged:any = null;

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
 

  constructor(private modalService: NgbModal,
    private _orderService: OrderService,
    private _userService: UserService,
    private _router : Router)
   {
    this.logged = this._userService.logged;
   }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
  createOrder(){
    this.createParams.user =this.logged.user.id;
    this.createParams.cart =this.logged.user.cart;
    this.createParams.city =this.tmp.city.trim(); 
    this.createParams.delivery_adress =this.tmp.delivery_adress.trim(); 
    this.createParams.delivery_date =JSON.stringify(this.tmp.delivery_date); 
    this.createParams.payment_method =this.tmp.payment_method.trim(); 
    console.log('params',this.createParams)
   
      this._orderService.createOrder(this.createParams).subscribe( 
        result => {
        
          console.log(result);
        },
        error => {
          alert('error!');
        }
       
      ),
      this._router.navigate(['/home']);
     
    // }
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      city: new FormControl(null, [
        Validators.required
       
      ]),
      deliveryAdress: new FormControl('', [
        Validators.required
       
      ]),
      deliveryDate: new FormControl('', [
        Validators.required
    
      ]),
      paymentMethod: new FormControl('', [
         //Validators.pattern(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/),
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9)
     
      ]),
    });
  }

}
