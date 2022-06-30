import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SortProductsPipe } from 'src/app/pipes/sort-products.pipe';
import { CartService } from 'src/app/services/cart.service';


@UntilDestroy()
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit, OnDestroy {

  /*plist:ProductType[]=[{
    productId:1000,
    productImage:'/assets/Laptop1.png', // copy/paste image in assets folder
    productName:'Laptop',
    productPrice:12999.678,
    productStock: 0
  }, {
    productId:1001,
    productImage:'/assets/Laptop2.png', // copy/paste image in assets folder
    productName:'Bike',
    productPrice:1999.234,
    productStock: 2
  }];*/
  plist: ProductType[] = [];
  selectedCode!: string;
  currency$!: Subscription;
  code$!: Observable<string>;
  public itemsToDisplay: ProductType[] = [];
  public current: number = 1;
  public perPage: number = 20;
  public total: number = 1;
  filterString: string = "";
  sortAttribute: string = "";

  
  constructor(private cartService: CartService,private productService: ProductService, private currencyService: CurrencyService, private router: Router) { 
    //method3
    this.code$ = this.currencyService.currencyObservable;
  }
  
  ngOnDestroy(): void {
    // method1
    // this.currency$.unsubscribe(); method1
  }

  ngOnInit(): void {
    this.getData();
    // method1
    //this.currency$ = this.currencyService.currencyObservable.subscribe((code => {   
    this.currencyService.currencyObservable
    // method2
    //.pipe(untilDestroyed(this))
    .subscribe((code => {
         this.selectedCode = code;
    }));
    
  }

  getData() {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('success', data);
        this.plist = data;
        this.total = Math.ceil(this.plist.length / this.perPage);
        this.itemsToDisplay = this.paginate(this.current, this.perPage);
      },
      (err) => {
        console.log('error', err);
      }
    )
  }
  
  addItem(data: any) {
    console.log('add to cart', data);
    this.cartService.addToCart(data);
    alert("Product: " + data.productName + " added to cart successfully");
    
    //this.router.navigate(['/cart', 12], {queryParams: {rating: 2}});
    //this.router.navigate(['/cart']);
  }

  public onGoTo(page: number): void {
    this.current = page
    this.itemsToDisplay = this.paginate(this.current, this.perPage)
  }

  public onNext(page: number): void {
    this.current = page + 1
    this.itemsToDisplay = this.paginate(this.current, this.perPage)
  }

  public onPrevious(page: number): void {
    this.current = page - 1
    this.itemsToDisplay = this.paginate(this.current, this.perPage)
  }

  public paginate(current: number, perPage: number): ProductType[] {
    return [...this.plist.slice((current - 1) * perPage).slice(0, perPage)];
  }

  async setSortAttribute(event: any, sortParam: string){
    this.sortAttribute = sortParam;
  }
}
