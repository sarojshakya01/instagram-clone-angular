import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  clickInput: boolean = false;
  dataFetched: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onClickInput() {
    document.getElementById('nav-search-input').focus();
    this.clickInput = true;
  }

  onBlurInput() {
    this.clickInput = false;
    console.log(1);
  }
}
