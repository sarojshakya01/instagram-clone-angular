import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-captionbar',
  templateUrl: './captionbar.component.html',
  styleUrls: ['./captionbar.component.css'],
})
export class CaptionbarComponent implements OnInit {
  @Input() caption;
  @Input() postBy;
  constructor() {}

  ngOnInit(): void {}
}
