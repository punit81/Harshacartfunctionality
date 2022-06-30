import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { ConversionPipe } from './pipes/conversion.pipe';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { LinkedinFormComponent } from './containers/linkedin-form/linkedin-form.component';
import { UppercaseDirective } from './directives/uppercase.directive';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SearchComponent } from './containers/search/search.component';
import { ErrorPageComponent } from './containers/error-page/error-page.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { UiModule } from './ui/ui.module';
//import { OrdersModule } from './orders/orders.module';
import { LoaderModule } from './loader/loader.module';
import { HttpLoaderInterceptor } from './loader/http-loader.interceptor';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { CartComponent } from './containers/cart/cart.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProductType } from 'src/types';
import { FilterPipe } from './pipes/filter.pipe';
import { SortProductsPipe } from './pipes/sort-products.pipe';
import { CartProductComponent } from './components/cart-product/cart-product.component';
//import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [
    // What we make : component, directive, pipe
    AppComponent,
    DemoComponent,
    ProductComponent,
    ProductListComponent,
    DiscountPipe,
    ConversionPipe,
    CheckoutComponent,
    LinkedinFormComponent,
    UppercaseDirective,
    NumbersOnlyDirective,
    SearchComponent,
    ErrorPageComponent,
    ProductDetailComponent,
    CurrencyComponent,
    CartComponent,
    HomepageComponent,
    PaginationComponent,
    FilterPipe,
    SortProductsPipe,
    CartProductComponent,
  ],
  imports: [
    // eagerly loaded modules
    UiModule,
    //OrdersModule,
    LoaderModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          zipcode: ({allowedCode, enteredCode}) => 
          `Allowed pincode is ${allowedCode}`,
          required: 'This field is required',
          minlength: ({ requiredLength, actualLength }) => 
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    })
  ],
  providers: [
    //services : singleton services
    // data sharing, session/state management servies
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoaderInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [
    //start-up component
    AppComponent]
})
export class AppModule {}