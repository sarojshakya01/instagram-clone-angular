import { Component, OnInit } from '@angular/core';
import { Suggestion } from 'src/app/modules/Suggestion';
import { SuggestionService } from 'src/app/services/suggestion.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css'],
})
export class SuggestionComponent implements OnInit {
  public fetched: boolean = true;
  // public apiResponse = [
  //   {
  //     followedBy: [
  //       'pooza_singh91',
  //       'bidhan.sthapit',
  //       'rebatov',
  //       'elna_stha',
  //       'ukg_ummesh',
  //       '_thehasinaaykahs_',
  //       'rajeshhamal',
  //       'paraskhadka77',
  //     ],
  //   },
  //   {
  //     follows: [
  //       'pooza_singh91',
  //       'bidhan.sthapit',
  //       'rebatov',
  //       'elna_stha',
  //       '_thehasinaaykahs_',
  //       'ukg_umesh',
  //       'shrinkhala_',
  //       'rajeshhamal',
  //       'paraskhadka77',
  //     ],
  //   },
  //   {
  //     userId: 'sandeep_lamichhane25',
  //     userName: 'Sandeep Lamichhane',
  //     profilePhoto: 'sandeep_lamichhane25_profilephoto.jpg',
  //     followedBy: [
  //       { userId: 'rebatov' },
  //       { userId: 'elna_Stha' },
  //       { userId: 'bidhan.sthapit' },
  //       { userId: 'ukg_umesh' },
  //       { userId: '_thehasinaaykahs_' },
  //       { userId: 'pooza_singh91' },
  //       { userId: 'shrinkhala_' },
  //       { userId: 'rajeshhamal' },
  //       { userId: 'rabi.lamichhane' },
  //       { userId: 'paraskhadka77' },
  //       { userId: 'baburam.bhattarai' },
  //     ],
  //     bio: { intro: '• Professional Cricketer of Nepal🇳🇵', website: '' },
  //   },
  //   {
  //     userId: 'rabi.lamichhane',
  //     userName: 'Rabi Lamichhane',
  //     profilePhoto: 'rabi.lamichhane_profilephoto.jpg',
  //     followedBy: [
  //       { userId: 'rebatov' },
  //       { userId: 'elna_Stha' },
  //       { userId: 'bidhan.sthapit' },
  //       { userId: 'ukg_umesh' },
  //       { userId: '_thehasinaaykahs_' },
  //       { userId: 'pooza_singh91' },
  //       { userId: 'shrinkhala_' },
  //       { userId: 'sandeep_lamichhane25' },
  //       { userId: 'rajeshhamal' },
  //       { userId: 'paraskhadka77' },
  //       { userId: 'baburam.bhattarai' },
  //     ],
  //     bio: {
  //       intro: 'Television Presentor Sidha Kura Janata Sanga',
  //       website: 'new24nepal.com',
  //     },
  //   },
  //   {
  //     userId: 'baburam.bhattarai',
  //     userName: 'Baburam Bhattarai',
  //     profilePhoto: 'baburam.bhattarai_profilephoto.jpg',
  //     followedBy: [
  //       { userId: 'rebatov' },
  //       { userId: 'elna_Stha' },
  //       { userId: 'bidhan.sthapit' },
  //       { userId: 'ukg_umesh' },
  //       { userId: '_thehasinaaykahs_' },
  //       { userId: 'pooza_singh91' },
  //       { userId: 'shrinkhala_' },
  //       { userId: 'sandeep_lamichhane25' },
  //       { userId: 'rajeshhamal' },
  //       { userId: 'rabi.lamichhane' },
  //       { userId: 'paraskhadka77' },
  //     ],
  //     bio: {
  //       intro: 'Ex Prime Minister of Nepal',
  //       website: 'baburambhattarai.com',
  //     },
  //   },
  // ];

  public suggestions: any = [];
  public followLabel = [];

  constructor(private suggestionService: SuggestionService) {}

  ngOnInit(): void {
    this.suggestionService.getSuggestions().subscribe((suggestions) => {
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

        for (let j = 0; j < suggestions[i].followedby.length; j++) {
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
            'more';
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
