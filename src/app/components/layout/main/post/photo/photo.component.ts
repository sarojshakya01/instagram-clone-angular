import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['/src/app/app.component.css', './photo.component.css'],
})
export class PhotoComponent implements OnInit {
  @Input() photo;
  imgUrl: string = '/assets/img/userdata/';
  photoIndex: number = 0;
  constructor() {
    this.photoIndex = 0;
  }

  ngOnInit(): void {}
  doubleClickPost(): void {}
}
