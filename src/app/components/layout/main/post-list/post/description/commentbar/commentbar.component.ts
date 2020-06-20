import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-commentbar',
  templateUrl: './commentbar.component.html',
  styleUrls: ['./commentbar.component.css'],
})
export class CommentbarComponent implements OnInit {
  @Input() comments;
  @Input() commentCount;
  @Input() clickViewAll;
  @Input() postSummary;
  @Input() likeIcon;

  @Output() handleViewAllCommentsEvent = new EventEmitter();
  @Output() handleDeleteCommentEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public handleViewAll(e): void {
    this.handleViewAllCommentsEvent.emit(e);
  }

  public handleDeleteComment(commentId): void {
    this.handleDeleteCommentEvent.emit(commentId);
  }
}
