import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-suggestion',
  templateUrl: './search-suggestion.component.html',
  styleUrls: ['./search-suggestion.component.css'],
})
export class SearchSuggestionComponent implements OnInit {
  @Input() suggestion;
  @Input() imgUrl;
  constructor() {}

  ngOnInit(): void {}
}
