import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  // /detail/id
  ngOnInit(): void {
    // /detail/1000 : PATH
    this.activateRoute.paramMap.subscribe((par) => {
      console.log('PID', par.get('pid'));
    });

    // /detail/1000?size=medium : QUERY
    this.activateRoute.queryParamMap.subscribe((par) => {
      console.log('SIZE', par.get('size'));
    })
  }

}
