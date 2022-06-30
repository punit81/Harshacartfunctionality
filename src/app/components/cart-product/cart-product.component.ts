import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  @Input() data!: ProductType;

@Output() btnClick = new EventEmitter();
@Output() quantityChange = new EventEmitter();
@Input() currencyCode = "INR";
  
  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
   // this.currencyService.currencyObservable.subscribe((code => {
   //   this.currencyCode = code;
   // }))
  }

  notifyParent() {
    // emitting/triggering a custom event
    this.btnClick.emit(this.data);
  }

  notifyParentForCartTotal(){
    this.quantityChange.emit();
  }

}
