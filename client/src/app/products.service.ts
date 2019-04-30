import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from './product';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import { ListProductState } from './ListProductState';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _endpointProducts = `http://localhost:3000/shopping/api/products`;
  constructor(private _http : HttpClient) {}

  private listProductSubject = new Subject<ListProductState>();
  Products : Product[]= [];
  ListProductState = this.listProductSubject.asObservable();


  

   public getProducts(){
    let call = this._endpointProducts;
    return this._http.get< any >(call);

  }

  public getCountProducts(){
    let call = this._endpointProducts+'/count';
    return this._http.get< any >(call);

  }

  getproductsByCategory(params:any = null) {
    let call = this._endpointProducts;
   
    if(params) {
      if(params.id) {
        call += `/${params.id}`; // have categories id GET /categories/:id
        console.log(call) 
      }
      // else if(params.uid) {
      //   call += `/user/${params.uid}`; // have user id GET /categories/user/:id       
      // }      
    }
    console.log(call) 
    return this._http.get< any >(call);
  }



  getProductById(params) : Observable<Product> {
    let call = this._endpointProducts;
    if(params){
      call += `/${params.id}`;
    return this._http.get< any >(call);
  }

  }

  createProduct(params) { 
    this.addProductToList;   
    return this._http.post< any >(this._endpointProducts,params);
    
  }
  updateProduct(params) { 
    //this.addProductToList;   
    return this._http.put< any >(this._endpointProducts,params);
    
  }

  // updateProduct(params) { 
  //   this.addProductToList;   
  //   return this._http.put< any >(this._endpointProducts,params);
    
  // }

  addProductToList(_product:any){
    console.log('add product to list');
    this.Products.push(_product)
    this.listProductSubject.next(<ListProductState>{ products:  this.Products});
    this.getProducts();
  }

  

  

  

  

  

  
}


