import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { ResizableModule } from 'angular-resizable-element';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
//import { UserService } from './user.service';
import {CartService} from  './cart.service';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { InfosComponent } from './infos/infos.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AdminComponent } from './admin/admin.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    InfosComponent,
    SignInComponent,
    ShopComponent,
    CartComponent,
    ProductsComponent,
    OrderComponent,
    ShippingComponent,
    AdminComponent,
    ManageProductsComponent,
    CategoriesComponent,
    AddComponent,

  ],
  //  entryComponents: [NgbdModalContent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
     FormsModule,
     ReactiveFormsModule,
     NgBootstrapFormValidationModule.forRoot(),
     ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
     ResizableModule,
     FlexLayoutModule,
     HttpClientModule,
   
   
  ],
  providers: [ NgbModal  ,  AuthGuard,{ 
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },Location , CartService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
