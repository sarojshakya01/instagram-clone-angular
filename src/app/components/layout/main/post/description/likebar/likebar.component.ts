import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likebar',
  templateUrl: './likebar.component.html',
  styleUrls: ['./likebar.component.css'],
})
export class LikebarComponent implements OnInit {
  @Input() likes;

  constructor() {}

  ngOnInit(): void {}
}
