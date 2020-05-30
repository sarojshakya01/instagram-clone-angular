import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-profile',
  templateUrl: './side-profile.component.html',
  styleUrls: ['./side-profile.component.css'],
})
export class SideProfileComponent implements OnInit {
  @Input() profileInfo;
  constructor() {}

  ngOnInit(): void {}
  clickProfile(): void {}
}
