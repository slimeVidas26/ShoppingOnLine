import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ShopComponent } from './shop/shop.component';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';




  const routes: Routes = [
    {path : '',redirectTo : '/home' , pathMatch :'full'},
    {path : 'home', component : HomeComponent},
    {path : 'signin', component :SignInComponent },
    {path : 'shop', component :ShopComponent },
      {path : 'order', component :OrderComponent },
      {path : 'admin', component :AdminComponent },
      {path : 'shop/category/:id', component :ShopComponent },
      {path : 'admin/category/:id', component :AdminComponent },
      {path : 'shop/product/:id', component :ShopComponent },
      {path: '**',redirectTo: '/home'}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
