import { Component, OnInit } from '@angular/core';

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
  public suggestions: Array<Object> = [];
  public userData: Array<Object> = [
    {
      userId: 'sarojsh01',
      userName: 'Saroj Shakya',
      profilePhoto: 'sarojsh01_profilephoto.jpg',
    },
    {
      userId: 'pooza_singh91',
      userName: 'Pooja Singh',
      profilePhoto: 'pooza_singh91_profilephoto.jpg',
    },
    {
      userId: 'bidhan.sthapit',
      userName: 'Bidhan Sthapit',
      profilePhoto: 'bidhan.sthapit_profilephoto.jpg',
    },
    {
      userId: 'rebatov',
      userName: 'Bishal Dangal',
      profilePhoto: 'rebatov_profilephoto.jpg',
    },
    {
      userId: 'elna_stha',
      userName: 'Alina Shrestha',
      profilePhoto: 'elna_stha_profilephoto.jpg',
    },
    {
      userId: '_thehasinaaykahs_',
      userName: 'Hasina Shakya',
      profilePhoto: '_thehasinaaykahs__profilephoto.jpg',
    },
    {
      userId: 'ukg_umesh',
      userName: 'Umesh Kant Ghimire',
      profilePhoto: 'ukg_umesh_profilephoto.jpg',
    },
    {
      userId: 'shrinkhala_',
      userName: 'Shrinkhala Khatiwada',
      profilePhoto: 'shrinkhala__profilephoto.jpg',
    },
    {
      userId: 'paraskhadka77',
      userName: 'Paras Khadka',
      profilePhoto: 'paraskhadka77_profilephoto.jpg',
    },
    {
      userId: 'sandeep_lamichhane25',
      userName: 'Sandeep Lamichhane',
      profilePhoto: 'sandeep_lamichhane25_profilephoto.jpg',
    },
    {
      userId: 'rajeshhamal',
      userName: 'Rajesh Hamal',
      profilePhoto: 'rajeshhamal_profilephoto.jpg',
    },
    {
      userId: 'rabi.lamichhane',
      userName: 'Rabi Lamichhane',
      profilePhoto: 'rabi.lamichhane_profilephoto.jpg',
    },
    {
      userId: 'baburam.bhattarai',
      userName: 'Baburam Bhattarai',
      profilePhoto: 'baburam.bhattarai_profilephoto.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public onClickInput() {
    document.getElementById('nav-search-input').focus();
    this.clickInput = true;
    this.dataFetched = true;
  }

  public handleBlurInput() {
    this.clickInput = false;
    this.suggestions = [];
    this.searchKey = '';
  }

  public handleKeyup(e) {
    this.dataFetched = false;
    this.searchKey = e.target.value;
    this.suggestions = this.userData;
    const regex = new RegExp(this.searchKey);
    this.suggestions = this.userData.filter(
      (key) => regex.test(key['userId']) || regex.test(key['userId'])
    );
    this.dataFetched = true;
  }

  public clickSuggestion(e) {
    e.preventDefault();
    this.clickInput = false;
    this.suggestions = [];
  }
}
