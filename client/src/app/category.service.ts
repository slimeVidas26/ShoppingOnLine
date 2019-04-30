import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  
  private _endpointCategories = `http://localhost:3000/shopping/api/categories`;
  constructor(private _http : HttpClient) { }

  

  getCategories(params:any = null) {
    let call = this._endpointCategories; 
    if(params) {
      if(params.pid) {
        call += `/${params.pid}`; // have categories id GET /categories/:id
      }
         
    }
    return this._http.get< any >(call);
  }
}
