import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ProductType } from 'src/types';
import { ProductComponent } from '../components/product/product.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartProductsMap = new Map<Number,ProductType>(); 
  constructor() { }

  addToCart(product: ProductType){
    let cartProduct = this.cartProductsMap.get(product.productId);
    if(cartProduct){
      if(cartProduct.productQuantity != undefined){
        product.productQuantity = cartProduct.productQuantity+1;
      }
    } else {
      product.productQuantity = 1;
    }
    this.cartProductsMap.set(product.productId, product);
  }

  removeFromCart(prodId: number){
    this.cartProductsMap.delete(prodId);
  }

  getCartProducts(){
    return this.cartProductsMap.values();
  }

  calculateCartTotal() {
    let cartTotal = 0;
    for(let item of this.cartProductsMap.values()){
      if(item.productQuantity){
        cartTotal += item.productPrice * item.productQuantity;
      }      
    }
    return cartTotal;
  }

}
