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

  constructor() {}

  ngOnInit(): void {}
}
