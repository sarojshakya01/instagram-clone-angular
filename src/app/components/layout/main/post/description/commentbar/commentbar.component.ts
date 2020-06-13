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

  myComments: any;
  clickViewAll: boolean;

  constructor() {}

  ngOnInit(): void {
    this.myComments = this.shortenComment();
  }

  handleViewAll(e): void {
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

  shortenComment(): any {
    let commentLimit = this.comments.length < 3 ? this.comments.length : 3;
    let newComments = [];
    for (let i = 0; i < commentLimit; i++) {
      newComments[i] = this.comments[i];
    }
    return newComments;
  }
}
