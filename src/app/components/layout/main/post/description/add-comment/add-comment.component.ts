import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent implements OnInit {
  btnDisabled: boolean = true;
  inputDisabled: boolean = false;
  fetched: boolean = true;
  value: string = '';
  constructor() {}

  ngOnInit(): void {
    this.btnDisabled = this.value.trim() === '' || !this.fetched;
    this.inputDisabled = !this.fetched;
  }
  handlePostCommentBtn(): void {}
  onChangeInput(): void {}
}
