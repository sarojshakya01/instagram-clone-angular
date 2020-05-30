import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent implements OnInit {
  @Input() stories: [];
  styleTransform = [];
  profilePhoto: string = '/assets/img/userdata/sarojsh01_profilephoto.jpg';
  userId: string = 'sarojsh01';
  constructor() {}

  ngOnInit(): void {
    this.createStyle();
  }

  ngAfterViewInit() {
    // for (let i = 0; i < this.stories.length; i++) {
    //   const id = 'story-canvas-' + i;
    //   let canvas = document.getElementById(id);
    //   if (canvas !== null) {
    //     var ctx = canvas.getContext('2d');
    //     ctx.beginPath();
    //     ctx.lineWidth = 2;
    //     ctx.strokeStyle = '#ff0000';
    //     ctx.arc(33, 33, 31, 0, 2 * Math.PI);
    //     ctx.stroke();
    //   }
    // }
  }

  createStyle(): void {
    this.stories.map((story, index) => {
      this.styleTransform.push({
        transform: 'translateX(' + 80 * index + 'px)',
      });
    });
  }
}
