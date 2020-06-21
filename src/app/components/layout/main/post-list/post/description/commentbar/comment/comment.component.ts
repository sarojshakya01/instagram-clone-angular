import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() comment;
  @Input() likeIcon;
  @Input() postSummary;

  @Output() handleDeleteCommentEvent = new EventEmitter();

  constructor(private commentService: CommentService) {}

  public commentLikeIcon = {
    fill: '',
    outline: '',
  };

  public deleteIcon: string =
    'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z';

  ngOnInit(): void {
    const liked = this.comment.likes.indexOf(this.postSummary.loginUser) > -1;

    if (liked) {
      this.commentLikeIcon.fill = 'red';
      this.commentLikeIcon.outline = this.likeIcon.black;
    } else {
      this.commentLikeIcon.fill = '';
      this.commentLikeIcon.outline = this.likeIcon.white;
    }
  }

  public handleLikeComment(): void {
    let likes = [...this.comment.likes];
    const commentId = this.comment.commentId;
    const postId = this.postSummary.postId;
    const likedBy = this.postSummary.loginUser;
    const liked = this.comment.likes.indexOf(likedBy) === -1;

    // for quick fake response, update the state. Later, actual state will be updated from API response
    if (liked) {
      this.commentLikeIcon.fill = 'red';
      this.commentLikeIcon.outline = this.likeIcon.black;
      this.comment.likes.push(likedBy);
    } else {
      this.commentLikeIcon.fill = '';
      this.commentLikeIcon.outline = this.likeIcon.white;
      this.comment.likes.splice(likes.indexOf(likedBy));
    }

    // const oldLikes = [...comment.likes];

    const params = {
      postId,
      commentId,
      likedBy,
      liked,
    };

    this.commentService.likeComment(params).subscribe((response) => {
      this.comment.likes = response;
      if (this.comment.likes.indexOf(likedBy) > -1) {
        this.commentLikeIcon.fill = 'red';
        this.commentLikeIcon.outline = this.likeIcon.black;
      } else {
        this.commentLikeIcon.fill = '';
        this.commentLikeIcon.outline = this.likeIcon.white;
      }
    });
  }

  public handleDeleteComment(): void {
    this.handleDeleteCommentEvent.emit(this.comment.commentId);
  }
}
