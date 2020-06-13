import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css'],
})
export class SidepanelComponent implements OnInit {
  @Input() profileInfo;
  @Output() setClickProfileEvent = new EventEmitter();

  setClickProfile() {
    this.setClickProfileEvent.emit();
  }

  year = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
