import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent implements OnInit {
  @Input() fetched;
  @Input() value;

  @Output() postCommentBtnEvent = new EventEmitter();
  @Output() postCommentEvent = new EventEmitter();
  @Output() inputChangeEvent = new EventEmitter();

  public btnDisabled: boolean = true;
  public inputDisabled: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.btnDisabled = this.value.trim() === '' || !this.fetched;
    this.inputDisabled = !this.fetched;
  }

  public handlePostCommentBtn(e): void {
    this.postCommentBtnEvent.emit(e);
    e.target.value = '';
  }

  public handlePostComment(e): void {
    this.postCommentEvent.emit(e);
  }

  public onChangeInput(e): void {
    this.inputChangeEvent.emit(e);
    this.btnDisabled =
      e.target.value.trim() === '' || !this.fetched ? true : false;
  }
}
