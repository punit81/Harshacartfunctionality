import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CartComponent } from './containers/cart/cart.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { ErrorPageComponent } from './containers/error-page/error-page.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { DemoComponent } from './demo/demo.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
// abc.com
{ path: '', component: HomepageComponent},

//abc.com/products
{ path: 'products', component: ProductListComponent},

{ path: 'cart', component: CartComponent},

{path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},

// abc.com/detail
{ path: 'detail/:pid', component: ProductDetailComponent},

{path:'orders', loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule)},

//404 route
{ path: '**', component: ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
