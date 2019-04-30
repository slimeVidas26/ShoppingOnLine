import {ChangeDetectionStrategy, Component,NgModule, OnInit , Input , EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 import { Product } from '../product';
 import { CartService } from '../cart.service';
 import { Location } from '@angular/common';
 import {Subscription} from 'rxjs';
 import {CartState} from '../CartState';
 import {ListProductState} from '../ListProductState';
 import {UserService } from '../user.service';




 import {ProductsService} from '../products.service';
 import { ActivatedRoute } from '@angular/router';
 import {Router , ParamMap} from '@angular/router';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
 //import {ModalProductComponent} from '../modal-product';

import { BrowserModule } from '@angular/platform-browser';
import { NgbdModalContent, SelectModalComponent } from '../select-modal/select-modal.component';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
   inputs : ['category' , 'products'],
   outputs : ['selectProduct'],
   //changeDetection: ChangeDetectionStrategy.OnPush


  
})
export class ProductsComponent implements OnInit {
  formGroup: FormGroup;
  closeResult: string;
 
  public categoryId;
   products : Array<Product>;
   public quantity : number;
   //public id : string;
   public productId : string;
   public selectProduct = new EventEmitter();
   tmp:any = {};
   //public product: Product ;
   @Input()product : Product;
   private subscription : Subscription;
   logged:any = null;
   public isAdmin=false;
  product_name: any;
  picture: any;
  price: any;
  category: any;

  
    
  
  
  constructor(private modalService: NgbModal,
              private fb:FormBuilder,
              private _productsService: ProductsService,
              private _cartService : CartService ,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private _userService: UserService  ) {
                this.logged = this._userService.logged;
              }

  Products : Product[] 

  onSelect(prod :Product){
    if(this.logged.user.role=="Admin"){
      this.isAdmin=true;
      this.selectProduct.emit(prod );
     
      //this.router.navigate(['/admin/category' , cat._id]);
      //alert('admin')
    }
    else{
      this.isAdmin= false;
    this.selectProduct.emit(prod);
    this.router.navigate(['/shop/product/',prod._id]);

    console.log("product id",prod._id);
    } 
  }



  AddProduct(_product : Product) {
    //_product.added = true;
    this ._cartService.addProduct(_product);
      let createParams = {
       id: this.productId,
       quantity: this.quantity
     };
        this._cartService.addProdToCart(createParams).subscribe( 
          result => {
            console.log('result',result);
           
          },
          error => {
            alert('error!');
          }
        )   
}





// RemoveProduct(_product : Product) {
//   //_product.added = false;
//   this
//       ._cartService
//       .removeProduct(_product._id);
// }

  open(content) {
    
     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',centered: true})
     .result.then((result) => {
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

  // "_id" : ObjectId("5b6ef2967bee34dd68bfab17"),
  // "product_name" : "product47",
  // "_category" : ObjectId("5b5917e6f413b57c2219e05f"),
  // "price" : 56,
  // "picture" : "uploads/1533997718619.isaac1518151809.jpg",

  // public addToCart(product: Product) {
  //   this.cartService.addToCart(product);
  //   this.router.navigateByUrl('/');
  // }

  ngOnInit() {

    // this.loaderService.show();
    this.subscription = this
    ._productsService
    .ListProductState
    .subscribe((state : ListProductState) => {
        this.products = state.products;
        console.log(this.products);
    });

    // this._cartService.getProducts().subscribe(
    //   data => this.Products = data, //Bind to view
    //    err => {
    //        // Log errors if any
    //        console.log(err);
    //    });


    this.formGroup = new FormGroup({
      Quantity: new FormControl('', [
        Validators.required
      ]),
      productId: new FormControl('', [
        Validators.required
      ])
    });
  } 

  

}
