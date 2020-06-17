import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Input() profileInfo;
  @Input() clickNav;
  @Input() inbox;

  @Output() handleNavClickEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleClickNav(param) {
    this.handleNavClickEvent.emit(param);
  }
}
