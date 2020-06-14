import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-profile',
  templateUrl: './side-profile.component.html',
  styleUrls: ['./side-profile.component.css'],
})
export class SideProfileComponent implements OnInit {
  @Input() profileInfo;

  @Output() setClickProfileEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public clickProfile(e) {
    this.setClickProfileEvent.emit();
    e.preventDefault();
  }
}
