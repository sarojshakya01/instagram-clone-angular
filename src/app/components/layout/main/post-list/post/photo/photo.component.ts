import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['/src/app/app.component.css', './photo.component.css'],
})
export class PhotoComponent implements OnInit {
  @Input() postedPhoto;
  @Output() handleDoubleClickPhotoEvent = new EventEmitter();

  public imgUrl: string = '/assets/img/userdata/';
  public photoIndex: number = 0;

  constructor(private postService: PostService) {
    this.photoIndex = 0;
  }

  ngOnInit(): void {}

  public doubleClickPost(e): void {
    this.handleDoubleClickPhotoEvent.emit(e);
  }

  public handlePrevPhoto(): void {
    if (this.photoIndex > 0) {
      this.photoIndex = this.photoIndex - 1;
    }
  }

  public handleNextPhoto(): void {
    if (this.photoIndex + 1 < this.postedPhoto.photo.length) {
      this.photoIndex = this.photoIndex + 1;
    }
  }
}
