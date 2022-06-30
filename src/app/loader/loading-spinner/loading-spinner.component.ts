import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {
  loading$:Observable<boolean>;
  constructor(private loaderService: LoaderService) { 
    this.loading$=this.loaderService.loadingObservable;
  }

  ngOnInit(): void {
  }

}
