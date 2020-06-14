import { Component, OnInit, Input } from '@angular/core';

const directIcon = {
  white:
    'M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z',
  black:
    'M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l13.2 13c.6.6 1.5.7 2.2.4l16.5-7.5c.5-.2 1 0 1.3.5.2.4 0 .9-.3 1.2l-15.1 9.8c-.7.5-1.1 1.3-.9 2.2l4.6 19.1c.2.9 1.4 1.1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5z',
};

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['../icons.component.css', './direct.component.css'],
})
export class DirectComponent implements OnInit {
  @Input() inbox;
  @Input() clickMe;

  public icon: string;

  constructor() {
    this.icon = directIcon.white;
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.clickMe) {
      this.icon = directIcon.black;
      this.inbox = 0;
    } else {
      this.icon = directIcon.white;
    }
  }
}
