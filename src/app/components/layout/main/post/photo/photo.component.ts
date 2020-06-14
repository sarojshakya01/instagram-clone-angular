import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['/src/app/app.component.css', './photo.component.css'],
})
export class PhotoComponent implements OnInit {
  @Input() photo;
  @Input() postId;
  @Output() clickPhotoEvent = new EventEmitter();

  public imgUrl: string = '/assets/img/userdata/';
  public photoIndex: number = 0;

  constructor() {
    this.photoIndex = 0;
  }

  ngOnInit(): void {}

  public doubleClickPost(e): void {
    this.clickPhotoEvent.emit(this.postId);
  }

  public prevPhoto(): void {
    if (this.photoIndex > 0) {
      this.photoIndex = this.photoIndex - 1;
    }
  }

  public nextPhoto(): void {
    if (this.photoIndex + 1 < this.photo.photo.length) {
      this.photoIndex = this.photoIndex + 1;
    }
  }
}
