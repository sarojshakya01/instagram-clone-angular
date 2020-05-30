import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  windowWidth = window.innerWidth;
  profileInfo = {
    userId: 'sarojsh01',
    userName: 'Saroj Shakya',
    profilePhoto: '/assets/img/userdata/sarojsh01_profilephoto.jpg',
  };
  sideStyle = {};

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const element = document.getElementById('igpost-main');
    const leftPos = element.getBoundingClientRect().left + window.scrollX;
    this.sideStyle = { left: (leftPos + 642).toString() + 'px' };
  }
}
