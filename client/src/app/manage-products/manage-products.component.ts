import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import {FormControl,FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Category } from '../category';
import { Product } from '../product';
import {Router} from '@angular/router';

import {CategoryService} from '../category.service';
import { ProductsService } from '../products.service';




@Component({
  selector: 'manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
  inputs : ['product']
})
export class ManageProductsComponent implements OnInit {
  isAddForm = false;
  isEditForm = true;
  loading: boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;


  formGroup: FormGroup;
  updateFormGroup : FormGroup;

  createParams:any = {};
  categories:Category[];
  productId: any;
  updateProductId: any;
   product_name: any;
   picture: any;
   price: any;
   category: any;
  private editName:boolean = false;
  //private editPicture:boolean = false;




  constructor(private _categoryService : CategoryService,
    private _productsService : ProductsService,
    private fb: FormBuilder,
    private router: Router)
     {  //this.createForm();
      this.updateForm();
    }

    // createForm() {
    //   this.formGroup = this.fb.group({
    //     productName: new FormControl('', [
    //       Validators.required,
    //     ]),
    //     productId: new FormControl('', [
    //       Validators.required
         
    //     ]),
    //     price: new FormControl('', [
    //       Validators.required
          
    //     ]),
    //     picture: new FormControl('', [
    //       Validators.required
    //       // Validators.minLength(9),
    //       // Validators.maxLength(9)
    //     ]),
    //     category: new FormControl('', [
    //       Validators.required
    //       // Validators.minLength(9),
    //       // Validators.maxLength(9)
    //     ])
        
    //   });
    // }
    updateForm() {
      this.updateFormGroup = this.fb.group({
        productName: new FormControl('', [
          Validators.required,
        ]),
        updateProductId: new FormControl('', [
          Validators.required
         
        ]),
        price: new FormControl('', [
          Validators.required
          
        ]),
        picture: new FormControl('', [
          Validators.required
          // Validators.minLength(9),
          // Validators.maxLength(9)
        ]),
        category: new FormControl('', [
          Validators.required
          // Validators.minLength(9),
          // Validators.maxLength(9)
        ])
        
      });
    }

  ngOnInit() {
    this._categoryService.getCategories()
.subscribe(resCategoryData=>this.categories = resCategoryData);
console.log(this.categories);  
  }
  ngOnChanges(){
    this.editName = false;
    //this.editPicture = false;
  }

  openAddForm(){
    this.isAddForm = true;

    if(this.isEditForm){
      this.isEditForm = false
    }
  }

  onProductNameClick(){
   this.editName = true;
  }

  // onPictureClick(){
  //   this.editPicture = true;
  // }

  openEditForm(){
    this.isEditForm = true;
if(this.isAddForm){
  this.isAddForm = false
}
  }

  

  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.updateFormGroup.get('picture').setValue(file,{emitModelToViewChange: false});
    }
  }

  
  private prepareUpdate(): any {
    let updateInput = new FormData();
    console.log('avant',updateInput)
    updateInput.append('productName', this.updateFormGroup.get('productName').value);
    updateInput.append('updateProductId', this.updateFormGroup.get('updateProductId').value);
    updateInput.append('price', this.updateFormGroup.get('price').value);
    updateInput.append('picture', this.updateFormGroup.get('picture').value);
    updateInput.append('category', this.updateFormGroup.get('category').value);
    console.log('apres',updateInput)
    return updateInput;
    
  }

 

  updatingProduct() {
    const updateFormModel = this.prepareUpdate();
    this.loading = true;
    this._productsService.updateProduct(updateFormModel).subscribe( 
      result => {
        console.log(result);
      },
      error => {
        alert('error!');
      }
    )
     //this.http.post('apiUrl', formModel)
    //this.createNewProduct();
    setTimeout(() => {
      //alert('done!');
      this.router.navigate(['/admin/category/',this.updateFormGroup.get('category').value]);

      this.loading = false;
    }, 1000);
  }

  //@Input()product : product;
    AddProduct(_product : Product) {
        //_product.added = true;
        this._productsService.addProductToList(_product);
    }

    
  }


