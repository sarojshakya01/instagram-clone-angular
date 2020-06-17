import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commentbar',
  templateUrl: './commentbar.component.html',
  styleUrls: ['./commentbar.component.css'],
})
export class CommentbarComponent implements OnInit {
  @Input() comments;
  @Input() postBy;
  @Input() loginUser;
  @Input() likeIcon;

  public myComments: any;
  public clickViewAll: boolean;

  constructor() {}

  ngOnInit(): void {
    this.myComments = this.shortenComment();
  }

  public handleViewAll(e): void {
    e.preventDefault();
    this.clickViewAll = !this.clickViewAll;
    if (this.clickViewAll) {
      for (let i = 0; i < this.comments.length; i++) {
        this.myComments[i] = this.comments[i];
      }
    } else {
      this.myComments = this.shortenComment();
    }
  }

  private shortenComment(): any {
    const tempCommentList = this.comments.reverse();
    let commentLimit = this.comments.length < 3 ? this.comments.length : 3;
    let newComments = [];
    for (let i = 0; i < commentLimit; i++) {
      newComments[i] = tempCommentList[i];
    }
    return newComments;
  }

  public deleteComment(commentId): void {
    const tempComment = [...this.comments];
    const commentIdx = tempComment.indexOf(this.myComments[commentId]);
    tempComment.splice(commentIdx, 1);
    this.comments = tempComment;
    this.myComments = this.shortenComment();
  }
}
