import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css'],
})
export class SidepanelComponent implements OnInit {
  @Input() profileInfo;
  @Output() setClickProfileEvent = new EventEmitter();

  public year: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}

  public setClickProfile() {
    this.setClickProfileEvent.emit();
  }
}
