import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css'],
})
export class SidepanelComponent implements OnInit {
  @Input() profileInfo;
  year = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
