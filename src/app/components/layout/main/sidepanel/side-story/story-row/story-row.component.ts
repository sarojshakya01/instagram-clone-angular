import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story-row',
  templateUrl: './story-row.component.html',
  styleUrls: ['./story-row.component.css'],
})
export class StoryRowComponent implements OnInit {
  @Input() story;
  @Input() index;

  public label: string;

  constructor() {}

  ngOnInit(): void {
    const { userId, profilePhoto, storyDate } = this.story;
    const dateInt = Date.parse(storyDate);

    let now = new Date();
    let nowNum = Number(now);
    const diffSec = (nowNum - dateInt) / 1000;
    let roundedDiff = 0;

    // if (diffSec / 3600 > 24) return null;

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

  ngAfterViewInit(): void {
    const id = 'story-canvas-' + this.index;
    let canvas = <HTMLCanvasElement>document.getElementById(id);

    if (canvas !== null) {
      let ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ff0000';
      ctx.arc(22, 22, 20, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }
}
