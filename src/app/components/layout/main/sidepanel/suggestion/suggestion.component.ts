import { Component, OnInit, Input } from '@angular/core';
import { SuggestionService } from 'src/app/services/suggestion.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css'],
})
export class SuggestionComponent implements OnInit {
  @Input() loginUser;
  public fetched: boolean = true;

  public suggestions: any = [];
  public followLabel = [];

  constructor(private suggestionService: SuggestionService) {}

  ngOnInit(): void {
    this.suggestionService
      .getSuggestions(this.loginUser)
      .subscribe((suggestions) => {
        this.fetched = true;

        let followedBy = suggestions[0].followedby;
        let follows = suggestions[1].follows;

        suggestions.shift();
        suggestions.shift();

        const imgUrl = '/assets/img/userdata/';

        for (let i = 0; i < suggestions.length; i++) {
          let suggestion = {
            userId: suggestions[i].userid,
            profilePhoto: imgUrl + suggestions[i].profilephoto,
            isFollowedBy:
              followedBy.indexOf(suggestions[i].userid) === -1 ? false : true,
            commonFollowedBy: [],
          };

          for (let j = 0; j < suggestions[i].followedby['length']; j++) {
            if (follows.indexOf(suggestions[i].followedby[j].userid) !== -1) {
              suggestion.commonFollowedBy.push(
                suggestions[i].followedby[j].userid
              );
            }
          }

          if (suggestion.commonFollowedBy.length > 0) {
            this.suggestions.push(suggestion);
          }
        }

        for (let i = 0; i < this.suggestions.length; i++) {
          let followedBy = '';

          if (this.suggestions[i].commonFollowedBy.length > 0) {
            followedBy =
              this.suggestions[i].commonFollowedBy[0] +
              ' + ' +
              (this.suggestions[i].commonFollowedBy.length - 1).toString() +
              ' more';
          }

          this.followLabel.push(
            this.suggestions[0].isFollowdBy
              ? 'Follows you'
              : 'followed by ' + followedBy
          );
        }
      });
  }
}
