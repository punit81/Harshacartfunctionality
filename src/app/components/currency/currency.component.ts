import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currencyCodes = ['INR', 'USD', 'EUR', 'GBP', 'CAD'];
  constructor(private currencySerice: CurrencyService) { }

  ngOnInit(): void {
  }
  
  changeCurrency(event:Event) {
    const ele = event.target as HTMLSelectElement;
    this.currencySerice.updateCurrency(ele.value);
  }

}
