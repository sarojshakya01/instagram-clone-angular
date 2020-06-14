import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../icons.component.css', './profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() profileInfo;
  @Input() clickMe;

  public style: any;

  constructor() {
    this.style = {
      display: 'none',
    };
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.clickMe) {
      this.style.display = 'block';
    } else {
      this.style.display = 'none';
    }
  }
}
