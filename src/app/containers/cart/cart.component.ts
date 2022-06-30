import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductType } from 'src/types';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  selectedCode!: string;
  currency$!: Subscription;
  code$!: Observable<string>;
  cartList: ProductType[] = [];
  cartTotalAmount: number = 0;
  constructor(private currencyService: CurrencyService,private cartService: CartService, private router: Router) { 
    this.code$ = this.currencyService.currencyObservable;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    for (let item of this.cartService.getCartProducts()){
      this.cartList.push(item);
    }
    this.cartTotalAmount = this.cartService.calculateCartTotal();
    return this.cartList;
  }

  removeItem(item: ProductType){
    this.cartService.removeFromCart(item.productId);
    this.cartList = [];
    this.getData();
    this.cartTotalAmount = this.cartService.calculateCartTotal();
    alert("Product: " + item.productName + " remove from cart successfully");
  }

  refreshCartTotal(){
    this.cartTotalAmount = this.cartService.calculateCartTotal();
  }
}
