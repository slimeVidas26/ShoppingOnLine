import { Injectable } from '@angular/core';
import {Http, Response ,Headers,RequestOptions} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';

import {Product} from './product';
import { CartState } from './CartState';
//import {of} from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
   //private itemsInCart: Product[] = [];

  private _endpointCartService = `http://localhost:3000/shopping/api/cart-detail/`;

  
  constructor(private _http : HttpClient) {
      //this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
   }
  //private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  private cartSubject = new Subject<CartState>();
  Products : Product[]= [];
  CartState = this.cartSubject.asObservable();


  // public getItems(): Observable<Product[]> {
  //   return this.itemsInCartSubject;
  // }

  
  // deleteProduct(product:Product){
  //   return this._http.delete(this._endpointCartService + product._id)
  //   .map((response:Response)=>response.json());
    
  // }

  addProduct(_product:any) {
    console.log('in service');
    this.Products.push(_product)
    this.cartSubject.next(<CartState>{ products:  this.Products});
    this.getCartProducts();
  }

  removeProduct(id:string) {
    //  this.Products = this.Products.filter((_product) =>  _product._id !== id )
    //  this.cartSubject.next(<CartState>{loaded: false , products:  this.Products});

    let call = this._endpointCartService; // default GET /users
    if(id) {
      call += `${id}`; // have user id GET /users/:id
    }
    return this._http.delete< any >(call);
  }

  
  // deleteProductCart(product : Product){
  //   return  this._http.delete(this._endpointCartService +`/${product._id}`)
  // }

  // removeProduct(id:any = null) {
  //   let call = this._endpointCartService;
  //   if(id) {
  //     call += `/${id}`; 
  //   }
  //   return this._http.delete< any >(this._endpointCartService);
  // }

  


  // public addToCart(item: Product) {
  //   // this.itemsInCartSubject.next([...this.itemsInCart, item]);
  // }

  // getCarProducts(params) : Observable <any> {
  //   let call = `${this._endpointCartService}/5b8acd30d1bfe441b830934d`;
  //   return this._http.get< any >(call);
  // }

  getCartProducts(id:any = null) {
    let call = this._endpointCartService; // default GET /users
    if(id) {
      call += `${id}`; // have user id GET /users/:id
    }
    return this._http.get< any >(call);
  }

  

  

  addProdToCart(params){
    return this._http.post< any >(`${this._endpointCartService}add`,params);
    //this.getCartProducts();
  }

  // public removeFromCart(item: Product) {
  //   const currentItems = [...this.itemsInCart];
  //   const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
  //   this.itemsInCartSubject.next(itemsWithoutRemoved);
  // }

  // public getTotalAmount(): Observable<number> {
  //   return this.itemsInCartSubject.map((items: Product[]) => {
  //     return items.reduce((prev, curr: Product) => {
  //       return prev + curr.price;
  //     }, 0);
  //   });
  // }
}
