import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../icons.component.css', './profile.component.css'],
})
export class ProfileComponent implements OnInit {
  style;
  profilePhoto: string;
  constructor() {
    this.style = {
      display: 'none',
    };
    this.profilePhoto = 'assets/img/userdata/sarojsh01_profilephoto.jpg';
  }

  ngOnInit(): void {}
}
