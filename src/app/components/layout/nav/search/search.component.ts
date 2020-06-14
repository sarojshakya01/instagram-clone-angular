import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public clickInput: boolean = false;
  public dataFetched: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public onClickInput() {
    document.getElementById('nav-search-input').focus();
    this.clickInput = true;
  }

  public onBlurInput() {
    this.clickInput = false;
  }
}
