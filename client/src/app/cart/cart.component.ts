import { Component, OnInit , OnDestroy, Input, EventEmitter } from '@angular/core';
import {CartService} from '../cart.service';
import {OrderService} from '../order.service';
import {Product} from '../product';
import { ActivatedRoute } from '@angular/router';
import {Router , ParamMap,} from '@angular/router';
import { UserService } from '../user.service';


import {Subscription} from 'rxjs';
import {CartState} from '../CartState';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import { ProductsService } from '../products.service';


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  loaded : boolean = true
  private notice = "Loading...";
  productsCart : Product[];
  private subscription : Subscription;
  public createParams:any;
  logged:any = null; 
  public currentCart : any;
  public total : number;
  product: any;
  id: any;
  mybool:boolean;
  mySnap : boolean;

  
  

  constructor(private _cartService : CartService,
              private _productsService : ProductsService,
              private _router: Router,
                private _orderService: OrderService,
                private _userService: UserService,
                private activatedRoute: ActivatedRoute) {

                  this.logged = this._userService.logged;
                  console.log(this._router.url);

                 
  }

    
  

  ngOnInit() {
    if(this._router.url === '/order'){
      this.mybool=true;
    }

    if(this._router.url === '/shop'){
      this.mySnap=true;
    }
    



    if(this.total ==null){
      this.total = 0;
    }
    // this.loaderService.show();
    this.currentCart = this.logged.user.cart;
    console.log('currentCar',this.currentCart)

    this._cartService.getCartProducts(this.currentCart)
    .subscribe(resProductsData=>this.productsCart = resProductsData.product);
    console.log(this.productsCart);

    this._cartService.getCartProducts(this.currentCart)
    .subscribe(resProductsData=>{this.total = resProductsData.total_amount;
    console.log("total",this.total);})

  //   this.activatedRoute.queryParams.subscribe(params => {
  //     let shop = params['shop'];
  //     console.log(shop); // Print the parameter to the console. 
  // });
    

    this.subscription = this
    ._cartService
    .CartState
    .subscribe((state : CartState) => {
        this.productsCart = state.products;
        //console.log("zis",this.productsCart);
    }); 

    

    // this._productsService.getProducts()
    // .subscribe(resProductsData=>this.productsBis = resProductsData);
    // console.log(this.productsBis);
  }
  

  RemoveProduct() {
    if(confirm('confirm delete product')) {
      let index=null;
    
for(let index=0; index< this.productsCart.length;index++){
  this.id = this.productsCart[index]._id;
} 
      this._cartService.removeProduct(this.id).subscribe( 
        result => {
           this.id = null;
        },
        error => {
          alert('error!');
        }
      )
    } 
    
  }

//   RemoveProduct() {
//     //_product.added = false;
//     this._cartService.removeProduct(_product._id);
// }

refresh(): void {
  window.location.reload();
}

  // removeProduct(product){
  //   alert('produc to remove')
  // }
  // deleteProduct(){
  //   this.deleteProductEvent.emit(this.product)
  // }

  

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

// getTotalAmount(){
//   this._cartService.getCartProducts(this.currentCart)
//   .subscribe(resProductsData=>this.total = resProductsData.total_amount);
//   console.log(this.total);

//   return this.total || 0;

// }

 addNewOrder(){
  
  // this.createParams.city =this.tmp.city.trim(); 
  // this.createParams.adress =this.tmp.adress.trim(); 
  // this.createParams.first_name =this.tmp.first_name.trim(); 
  // this.createParams.last_name =this.tmp.last_name.trim(); 
  // console.log('params',this.createParams)
  //  if(this.createParams.city!=''&& this.createParams.adress !='' &&
  //   this.createParams.first_name !='' && this.createParams.last_name !='' ) {
    this._orderService.createOrder(this.createParams).subscribe( 
      result => {
        console.log(result);
      },
      error => {
        alert('error!');
      }
    ),
 this._router.navigate(['order'])
}





  // public getTotal(): Observable<number> {
  //   return this._cartService.getTotalAmount();
  // }

  // public removeItem(item: Product) {
  //   this._cartDetailService.removeFromCart(item)
  // }

}
