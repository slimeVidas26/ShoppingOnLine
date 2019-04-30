import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import {Router , ParamMap} from '@angular/router';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  categories : Array<Category>;
  selectedCategory : Category;
  products : Array<Product>;
  public id : string;
  selectedProduct : Product;


  constructor(private _categoryService: CategoryService,
    private _productsService: ProductsService,
    private route : ActivatedRoute) { }

  ngOnInit() {

    this._categoryService.getCategories()
.subscribe(resCategoryData=>this.categories = resCategoryData);
console.log(this.categories);
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

}

onSelectProduct(product : any){ 
  // this.selectedCategory = category;
  this.selectedProduct = product;
  //this.selectedProduct = this.products

}
}
