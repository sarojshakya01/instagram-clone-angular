import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  @Input() postDetail;
  @Output() handlePostLikeEvent = new EventEmitter();

  public postSummary = {};
  public visibleComments = [];
  public fetched: boolean = true;
  public value: string = '';
  public clickViewAll: boolean;

  public likeIcon = {
    white:
      'M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z',
    black:
      'M35.3 35.6c-9.2 8.2-9.8 8.9-11.3 8.9s-2.1-.7-11.3-8.9C6.5 30.1.5 25.6.5 17.8.5 9.9 6.4 3.5 13.7 3.5 20.8 3.5 24 8.8 24 8.8s3.2-5.3 10.3-5.3c7.3 0 13.2 6.4 13.2 14.3 0 7.8-6.1 12.3-12.2 17.8z',
  };

  constructor(
    private postService: PostService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.postSummary = {
      postId: this.postDetail.postId,
      postBy: this.postDetail.postBy,
      loginUser: this.postDetail.loginUser,
    };
    this.visibleComments = this.getVisibleComments();
  }

  public clickPostLike(e): void {
    this.handlePostLikeEvent.emit(e);
  }

  public handlePostCommentBtn(e): void {
    const textareaElem = e.currentTarget.parentElement.elements[0];
    const postId = parseInt(textareaElem.closest('article').id);
    this.postComment(postId);
  }

  public handlePostComment(e): void {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (this.value.trim() !== '') {
        const postId = parseInt(e.currentTarget.closest('article').id);
        this.postComment(postId);
      }
    }
  }

  public handleDeleteComment(commentId): void {
    const postId = this.postDetail.postId;

    let comments = [...this.postDetail.comments];

    // const oldComments = JSON.parse(JSON.stringify(comments));

    const params = {
      postId,
      commentId,
    };

    this.commentService.deleteComment(params).subscribe((response) => {
      if (response.length > 0) {
        const newComments = response.map((cmnt, index) => {
          let comment = {
            commentBy: cmnt.commentby,
            mention: cmnt.mention,
            comment: cmnt.comment,
            likes: cmnt.likes,
          };
          return comment;
        });
        this.postDetail.comments = newComments;
        this.visibleComments = this.getVisibleComments();
      }
    });

    comments.splice(commentId, 1);
    this.postDetail.comments = comments;
    this.visibleComments = this.getVisibleComments();
  }

  public handleViewAllComments(e): void {
    e.preventDefault();
    this.clickViewAll = !this.clickViewAll;
    this.visibleComments = this.getVisibleComments();
  }

  public onChangeInput(e): void {
    this.value = e.target.value;
  }

  private postComment = (postId) => {
    if (this.value !== '') {
      const value = this.value;
      const tempComment = {
        commentBy: this.postDetail.loginUser,
        mention:
          value.indexOf('@') > -1
            ? value.substring(
                value.indexOf('@') + 1,
                value.indexOf(' ') - value.indexOf('@')
              )
            : '',
        comment:
          value.indexOf('@') > -1
            ? value.substring(value.indexOf(' ') + 1)
            : value,
        likes: [],
      };

      const params = {
        postId: postId + 1,
        commentBy: tempComment.commentBy,
        mention: tempComment.mention,
        comment: tempComment.comment,
      };

      this.fetched = false;

      this.commentService.addComent(params).subscribe((response) => {
        const newComment = {
          commentBy: response.commentby,
          mention: response.mention,
          comment: response.comment,
          likes: response.likes,
        };
        this.postDetail.comments.push(newComment);
        this.value = '';
        this.fetched = true;
        this.visibleComments = this.getVisibleComments();
      });
    }
  };

  private getVisibleComments(): any {
    let tempCommentList = [...this.postDetail.comments];
    let modifiedComments = [];
    for (let i = 0; i < tempCommentList.length; i++) {
      modifiedComments[i] = tempCommentList[i];
      modifiedComments[i]['commentId'] = i;
    }
    modifiedComments.reverse();

    let commentLimit;
    if (this.clickViewAll) commentLimit = this.postDetail.comments.length;
    else
      commentLimit =
        this.postDetail.comments.length < 3
          ? this.postDetail.comments.length
          : 3;
    let newComments = [];
    for (let i = 0; i < commentLimit; i++) {
      newComments[i] = modifiedComments[i];
    }
    return newComments;
  }
}
