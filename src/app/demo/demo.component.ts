import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  demoData: string = 'test data';
  obj = {name: 'test', age: 12};
  constructor() { }

  ngOnInit(): void {
  }

  showAlert() {
    alert("hello world");
  }

}
