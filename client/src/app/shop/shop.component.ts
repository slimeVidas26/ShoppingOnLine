import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import {Router , ParamMap} from '@angular/router';
import { ProductsService } from '../products.service';
 import { Product } from '../product';
 import {ActivatedRoute} from '@angular/router';
import {CartService} from '../cart.service';





@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],

})
export class ShopComponent implements OnInit {


categories : Array<Category>;
cart : Product[];
  products : Array<Product>;

selectedCategory : Category;
selectedProduct : Product;
  public style: object = {};
  public id : string;

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

  constructor(private _categoryService: CategoryService ,
              private _router : Router,
              private route : ActivatedRoute,
              private _productsService: ProductsService,
              private _cartService: CartService) { }

  ngOnInit() {
this._categoryService.getCategories()
.subscribe(resCategoryData=>this.categories = resCategoryData);
console.log(this.categories);
  // this._productsService.getproductsByCategory()
  //  .subscribe(resProductsData=>this.products = resProductsData)
  this.route.paramMap.subscribe((params : ParamMap)=>{
      this.id = params.get('id');

      this._productsService.getproductsByCategory({id:this.id})
      .subscribe(resProductsData=>this.products = resProductsData)
     console.log('pro',this.products);
     });
     this._productsService.getProducts()
     .subscribe(resProductsData=>this.products = resProductsData);
     console.log(this.products);
     
     
  }

  onSelectCategory(category : any){ 
    // this.selectedCategory = category;
    this.selectedCategory = category;
    //this.selectedProduct = this.products

    console.log("category",this.selectedCategory);
    console.log("products",this.products);
  }

  // onDeleteProductEvent(product:any){
  //   let productArray = this.products;
  //   this._cartService.deleteProduct(product)
  //   .subscribe(resDeleteProduct=>{
  //     for(let i=0;i<productArray.length;i++){
  //       if(product[i]._id===product._id){
  //         productArray.splice(i,1);
  //       }
  //     }
  //   });
  //   this.selectedProduct =null;
  // }

}
