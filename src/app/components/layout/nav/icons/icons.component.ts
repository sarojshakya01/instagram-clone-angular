import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css'],
})
export class IconsComponent implements OnInit {
  @Input() profileInfo;
  @Input() clickNav;
  @Input() inbox;

  @Output() handleNavClickEvent = new EventEmitter();

  public clickHome: boolean;
  public clickDirect: boolean;
  public clickExplore: boolean;
  public clickActivity: boolean;
  public clickProfile: boolean;

  constructor() {
    this.clickHome = true;
    this.clickDirect = false;
    this.clickExplore = false;
    this.clickActivity = false;
    this.clickProfile = false;
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.clickHome = this.clickNav === 'home';
    this.clickDirect = this.clickNav === 'direct';
    this.clickExplore = this.clickNav === 'explore';
    this.clickActivity = this.clickNav === 'activity';
    this.clickProfile = this.clickNav === 'profile';
  }

  public handleClickNav(e, navName) {
    const param = [e, navName];
    this.handleNavClickEvent.emit(param);
  }
}
