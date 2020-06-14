import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public windowWidth: number = window.innerWidth;

  public profileInfo = {
    userId: 'sarojsh01',
    userName: 'Saroj Shakya',
    profilePhoto: 'assets/img/userdata/sarojsh01_profilephoto.jpg',
  };

  public clickNav: string = 'home';
  public inbox: number = 5;

  ngOnInit(): void {}

  public onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  public setClickProfile = () => {
    this.clickNav = 'profile';
  };

  public handleClickNav = (navName) => {
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
