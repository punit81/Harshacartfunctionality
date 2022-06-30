import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { debounceTime,switchMap,retry,distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService],
})
export class SearchComponent implements OnInit {
  search = new FormControl();
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.search.valueChanges.
    pipe(
      debounceTime(500), // delyas
      distinctUntilChanged(), // no requests if request is same within debounce time
      switchMap((val) => this.searchService.getRepos(val)), // cancellations
      retry(3)
      ).
      subscribe((value) => {
        //this.getData(value);
        //console.log(value);
        console.log('SERVER DATA', value);
    });
  }

  getData(query: string) {
    this.searchService.getRepos(query).subscribe(
      (data) => {
        console.log('SUCCESS', data);
      },
      (error) => {
        console.log('ERROR', error);
      }
    );
  }
}
