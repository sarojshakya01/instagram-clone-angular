import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timebar',
  templateUrl: './timebar.component.html',
  styleUrls: ['./timebar.component.css'],
})
export class TimebarComponent implements OnInit {
  @Input() postTime;
  public label: string;

  constructor() {}

  ngOnInit(): void {
    const dateInt = Date.parse(this.postTime);

    let now = new Date();
    let nowNum = Number(now);
    const diffSec = (nowNum - dateInt) / 1000;
    let roundedDiff = 0;

    if (diffSec < 60) {
      roundedDiff = Math.round(diffSec);
      this.label =
        roundedDiff.toString() +
        (roundedDiff > 1 ? ' seconds' : ' second') +
        ' ago';
    } else if (diffSec / 60 < 60) {
      roundedDiff = Math.round(diffSec / 60);
      this.label =
        roundedDiff.toString() +
        (roundedDiff > 1 ? ' minutes' : ' minute') +
        ' ago';
    } else if (diffSec / 3600 < 24) {
      roundedDiff = Math.round(diffSec / 3600);
      this.label =
        roundedDiff.toString() + (roundedDiff > 1 ? ' hours' : 'hour') + ' ago';
    } else if (diffSec / 86400 < 30) {
      roundedDiff = Math.round(diffSec / 86400);
      this.label =
        roundedDiff.toString() + (roundedDiff > 1 ? ' days' : ' day') + ' ago';
    } else if (diffSec / (86400 * 30) < 12) {
      roundedDiff = Math.round(diffSec / (86400 * 30));
      this.label =
        roundedDiff.toString() +
        (roundedDiff > 1 ? ' months' : ' month') +
        ' ago';
    } else if (diffSec / 86400 < 365) {
      roundedDiff = Math.round(diffSec / 86400);
      this.label =
        roundedDiff.toString() +
        (roundedDiff > 1 ? ' years' : ' yeaar') +
        ' ago';
    }
  }
}
