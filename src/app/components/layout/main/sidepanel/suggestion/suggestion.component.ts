import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css'],
})
export class SuggestionComponent implements OnInit {
  public fetched: boolean = true;
  public apiResponse = [
    {
      followedBy: [
        'pooza_singh91',
        'bidhan.sthapit',
        'rebatov',
        'elna_stha',
        'ukg_ummesh',
        '_thehasinaaykahs_',
        'rajeshhamal',
        'paraskhadka77',
      ],
    },
    {
      follows: [
        'pooza_singh91',
        'bidhan.sthapit',
        'rebatov',
        'elna_stha',
        '_thehasinaaykahs_',
        'ukg_umesh',
        'shrinkhala_',
        'rajeshhamal',
        'paraskhadka77',
      ],
    },
    {
      userId: 'sandeep_lamichhane25',
      userName: 'Sandeep Lamichhane',
      profilePhoto: 'sandeep_lamichhane25_profilephoto.jpg',
      followedBy: [
        { userId: 'rebatov' },
        { userId: 'elna_Stha' },
        { userId: 'bidhan.sthapit' },
        { userId: 'ukg_umesh' },
        { userId: '_thehasinaaykahs_' },
        { userId: 'pooza_singh91' },
        { userId: 'shrinkhala_' },
        { userId: 'rajeshhamal' },
        { userId: 'rabi.lamichhane' },
        { userId: 'paraskhadka77' },
        { userId: 'baburam.bhattarai' },
      ],
      bio: { intro: '• Professional Cricketer of Nepal🇳🇵', website: '' },
    },
    {
      userId: 'rabi.lamichhane',
      userName: 'Rabi Lamichhane',
      profilePhoto: 'rabi.lamichhane_profilephoto.jpg',
      followedBy: [
        { userId: 'rebatov' },
        { userId: 'elna_Stha' },
        { userId: 'bidhan.sthapit' },
        { userId: 'ukg_umesh' },
        { userId: '_thehasinaaykahs_' },
        { userId: 'pooza_singh91' },
        { userId: 'shrinkhala_' },
        { userId: 'sandeep_lamichhane25' },
        { userId: 'rajeshhamal' },
        { userId: 'paraskhadka77' },
        { userId: 'baburam.bhattarai' },
      ],
      bio: {
        intro: 'Television Presentor Sidha Kura Janata Sanga',
        website: 'new24nepal.com',
      },
    },
    {
      userId: 'baburam.bhattarai',
      userName: 'Baburam Bhattarai',
      profilePhoto: 'baburam.bhattarai_profilephoto.jpg',
      followedBy: [
        { userId: 'rebatov' },
        { userId: 'elna_Stha' },
        { userId: 'bidhan.sthapit' },
        { userId: 'ukg_umesh' },
        { userId: '_thehasinaaykahs_' },
        { userId: 'pooza_singh91' },
        { userId: 'shrinkhala_' },
        { userId: 'sandeep_lamichhane25' },
        { userId: 'rajeshhamal' },
        { userId: 'rabi.lamichhane' },
        { userId: 'paraskhadka77' },
      ],
      bio: {
        intro: 'Ex Prime Minister of Nepal',
        website: 'baburambhattarai.com',
      },
    },
  ];
  public suggestions = [];
  public followLabel = [];

  constructor() {
    let followedBy = this.apiResponse[0].followedBy;
    let follows = this.apiResponse[1].follows;
    let suggestionTemp = [];

    for (let i = 2; i < this.apiResponse.length; i++) {
      suggestionTemp.push(this.apiResponse[i]);
    }
    const imgUrl = '/assets/img/userdata/';

    for (let i = 0; i < suggestionTemp.length; i++) {
      let suggestion = {
        userId: suggestionTemp[i].userId,
        profilePhoto: imgUrl + suggestionTemp[i].profilePhoto,
        isFollowedBy:
          followedBy.indexOf(suggestionTemp[i].userId) === -1 ? false : true,
        commonFollowedBy: [],
      };

      for (let j = 0; j < suggestionTemp[i].followedBy.length; j++) {
        if (follows.indexOf(suggestionTemp[i].followedBy[j].userId) !== -1) {
          suggestion.commonFollowedBy.push(
            suggestionTemp[i].followedBy[j].userId
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
  }

  ngOnInit(): void {}
}
