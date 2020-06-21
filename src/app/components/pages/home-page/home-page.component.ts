import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', '../../../app.component.css'],
})
export class HomePageComponent implements OnInit {
  public windowWidth: number = window.innerWidth;

  public profileInfo = {
    userId: 'sarojsh01',
    userName: 'Saroj Shakya',
    profilePhoto: 'assets/img/userdata/sarojsh01_profilephoto.jpg',
  };

  public clickNav: string = 'home';
  public inbox: number = 5;

  ngOnInit(): void {}

  public handleResize(e) {
    this.windowWidth = e.target.innerWidth;
  }

  public handleClickProfile = (e) => {
    this.clickNav = 'profile';
  };

  public handleClickNav = (param) => {
    const navName = param[1];
    if (navName === 'home') {
      this.clickNav = 'home';
    } else if (navName === 'direct') {
      this.clickNav = 'direct';
    } else if (navName === 'explore') {
      this.clickNav = 'explore';
    } else if (navName === 'activity') {
      this.clickNav = 'activity';
    } else if (navName === 'profile') {
      this.clickNav = 'profile';
    } else {
      this.clickNav = '';
    }

    if (navName !== 'home') {
      param[0].preventDefault();
    }
  };
}
