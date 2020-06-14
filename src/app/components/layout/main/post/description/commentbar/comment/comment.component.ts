import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() comment;
  @Input() likeIcon;
  @Input() loginUser;
  @Input() postBy;
  @Input() index;

  @Output() handleClickDeleteComment = new EventEmitter();

  constructor() {}

  public likeComment: boolean;

  public commentLikeIcon = {
    fill: '',
    outline: '',
  };

  public deleteIcon =
    'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z';

  ngOnInit(): void {
    this.likeComment = this.comment.likes.indexOf(this.loginUser) > -1;

    if (this.likeComment) {
      this.commentLikeIcon.fill = 'red';
      this.commentLikeIcon.outline = this.likeIcon.black;
    } else {
      this.commentLikeIcon.fill = '';
      this.commentLikeIcon.outline = this.likeIcon.white;
    }
  }

  public clickLikeComment(): void {
    this.likeComment = !this.likeComment;
    const indexOfCommentLiker = this.comment.likes.indexOf(this.loginUser);
    if (this.likeComment) {
      this.commentLikeIcon.fill = 'red';
      this.commentLikeIcon.outline = this.likeIcon.black;
      this.comment.likes.push(this.comment.loginUser);
    } else {
      this.commentLikeIcon.fill = '';
      this.commentLikeIcon.outline = this.likeIcon.white;
      this.comment.likes.splice(indexOfCommentLiker, 1);
    }
  }

  public clickDeleteComment(): void {
    this.handleClickDeleteComment.emit(this.index);
  }
}
