import { Component, OnInit } from '@angular/core';
import { Search, SearchResponse } from 'src/app/modules/Search';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public clickInput: boolean = false;
  public dataFetched: boolean = false;
  public searchKey: string = '';
  public imgUrl: string = '/assets/img/userdata/';
  public suggestions: Search[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  public onClickInput() {
    document.getElementById('nav-search-input').focus();
    this.clickInput = true;
    this.dataFetched = true;
  }

  public handleKeyup(e) {
    this.dataFetched = false;
    this.searchKey = e.target.value;
    this.searchService
      .getSearchSuggestions(e.target.value)
      .subscribe((suggestions) => {
        this.dataFetched = true;
        this.suggestions;
        this.suggestions.splice(0, this.suggestions.length);
        for (let i = 0; i < suggestions.length; i++) {
          this.suggestions.push({
            userId: suggestions[i].userid,
            userName: suggestions[i].username,
            profilePhoto: suggestions[i].profilephoto,
          });
        }
      });
  }

  public clickSuggestion(e) {}

  public clickClearInput(e) {
    this.searchKey = '';
    this.clickInput = false;
    this.suggestions = [];
  }
}
