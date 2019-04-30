import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from './product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _endpointOrders = `http://localhost:3000/shopping/api/orders`;

  constructor(private _http : HttpClient) {}

  createOrder(params) {    
    return this._http.post< any >(this._endpointOrders,params);
  }

  // closeOrder(params){
  //   let call = `${this._endpointOrders}/push-order`;
  //   if(params){
  //     call += `/${params.id}`;
  //   return this._http.get< any >(call);
   
  //   }
 
  // }
  
}
