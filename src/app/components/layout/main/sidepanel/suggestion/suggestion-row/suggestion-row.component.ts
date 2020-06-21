import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suggestion-row',
  templateUrl: './suggestion-row.component.html',
  styleUrls: ['./suggestion-row.component.css'],
})
export class SuggestionRowComponent implements OnInit {
  @Input() suggestion;
  @Input() index;

  public followLabel: string;

  constructor() {}

  ngOnInit(): void {
    const { userId, profilePhoto, commonFollowedBy } = this.suggestion;

    let followedBy = '';

    if (commonFollowedBy.length > 0) {
      followedBy =
        commonFollowedBy[0] +
        ' + ' +
        (commonFollowedBy.length - 1).toString() +
        ' more';
    }

    this.followLabel = this.suggestion.isFollowdBy
      ? 'Follows you'
      : 'followed by ' + followedBy;
  }

  public clickFollow(): void {
    alert('This feature is under construction!');
  }
}
