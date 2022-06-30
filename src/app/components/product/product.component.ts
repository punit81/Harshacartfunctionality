import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
// ! : to supress variable initialization issue

@Input() data!: ProductType;

@Output() btnClick = new EventEmitter();
@Input() currencyCode = "INR";
  
  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
   // this.currencyService.currencyObservable.subscribe((code => {
   //   this.currencyCode = code;
   // }))
  }

  notifyParent() {
    // emitting/triggering a custom event
    this.btnClick.emit(this.data
      /*{
      id: this.data.productId,
      name: this.data.productName,
      image: this.data.productImage,
      price: this.data.productPrice,
    }*/
    );
  }

  discountCalculation() {
    console.log('discount calculation');
    return '10% off';
  }

}
