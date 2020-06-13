import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  windowWidth = window.innerWidth;

  profileInfo = {
    userId: 'sarojsh01',
    userName: 'Saroj Shakya',
    profilePhoto: 'assets/img/userdata/sarojsh01_profilephoto.jpg',
  };

  clickNav = 'home';
  inbox = 5;

  ngOnInit(): void {}

  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  setClickProfile = () => {
    this.clickNav = 'profile';
  };

  handleClickNav = (navName) => {
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
  };
}
