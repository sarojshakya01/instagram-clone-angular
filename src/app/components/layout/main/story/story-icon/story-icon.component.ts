import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story-icon',
  templateUrl: './story-icon.component.html',
  styleUrls: ['./story-icon.component.css'],
})
export class StoryIconComponent implements OnInit {
  @Input() story;
  @Input() index;
  @Input() loginUser;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const id = 'story-canvas-' + this.index;
    let canvas = <HTMLCanvasElement>document.getElementById(id);
    if (canvas !== null) {
      var ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ff0000';
      ctx.arc(33, 33, 31, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }

  public clickStory(e): void {}
}
