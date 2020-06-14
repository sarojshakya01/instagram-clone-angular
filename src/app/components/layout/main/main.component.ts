import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  @Input() windowWidth;
  @Input() profileInfo;

  @Output() setClickProfileEvent = new EventEmitter();

  public sideStyle: any = {};

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    const element = document.getElementById('igpost-main');

    if (element !== undefined && element !== null) {
      const leftPos = element.getBoundingClientRect().left + window.scrollX;
      this.sideStyle = { left: (leftPos + 642).toString() + 'px' };
    }
  }

  ngAfterViewInit(): void {
    const element = document.getElementById('igpost-main');
    const leftPos = element.getBoundingClientRect().left + window.scrollX;
    this.sideStyle = { left: (leftPos + 642).toString() + 'px' };
  }

  public setClickProfile() {
    this.setClickProfileEvent.emit();
  }
}
