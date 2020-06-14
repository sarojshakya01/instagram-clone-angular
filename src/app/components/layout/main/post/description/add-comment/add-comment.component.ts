import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent implements OnInit {
  public btnDisabled: boolean = true;
  public inputDisabled: boolean = false;
  public fetched: boolean = true;
  public value: string = '';
  constructor() {}

  ngOnInit(): void {
    this.btnDisabled = this.value.trim() === '' || !this.fetched;
    this.inputDisabled = !this.fetched;
  }

  public handlePostCommentBtn(): void {}

  public onChangeInput(): void {}
}
