import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  public logo: string;
  public style: Object;

  constructor() {}

  ngOnInit(): void {
    this.style = { width: '100%', height: '100%', margin: '0 0 0 0' };

    if (window.innerWidth > 604) {
      this.logo = 'assets/img/instagram.png';
    } else {
      this.logo = 'assets/img/instagram-logo.png';
      this.style = { width: '11%', height: '11%', margin: '0 0 8px 0' };
    }
  }
}
