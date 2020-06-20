import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Comment } from 'src/app/modules/Comment';
import { PostedByInfo, PostedPhoto, PostDetail } from 'src/app/modules/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() profileInfo;
  @Input() post;

  @Output() DounleClickPhotoEvent = new EventEmitter();

  public imgUrl: string = '/assets/img/userdata/';
  public postByInfo: PostedByInfo = {
    postBy: '',
    postByPhoto: '',
    location: '',
  };
  public postedPhoto: PostedPhoto = {
    postId: -1,
    postBy: '',
    photo: [],
    likes: [],
  };
  public postDetail: PostDetail = {
    postId: -1,
    postBy: '',
    caption: '',
    likes: [],
    comments: [],
    loginUser: '',
    postTime: '',
  };

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    const tempComments: Comment[] = [];

    this.postByInfo.postBy = this.post.postby;
    this.postByInfo.postByPhoto = this.imgUrl + this.post.postbyphoto;
    this.postByInfo.location = this.post.location;

    this.postedPhoto.postId = this.post.postid;
    this.postedPhoto.postBy = this.post.postby;
    this.postedPhoto.photo = this.post.photo;
    this.postedPhoto.likes = this.post.likes;

    for (let j = 0; j < this.post.comments['length']; j++) {
      tempComments.push({
        commentBy: this.post.comments[j].commentby,
        mention: this.post.comments[j].mention,
        comment: this.post.comments[j].comment,
        likes: this.post.comments[j].likes,
      });
    }

    this.postDetail.postId = this.post.postid;
    this.postDetail.postBy = this.post.postby;
    this.postDetail.loginUser = this.profileInfo.userId;
    this.postDetail.caption = this.post.caption;
    this.postDetail.likes = this.post.likes;
    this.postDetail.comments = tempComments;
    this.postDetail.postTime = this.post.posttime;
  }

  public handleLikePost(e): void {
    let postDetail = { ...this.postDetail };
    const postId = this.postDetail.postId;
    const indexOfPostLiker = postDetail.likes.indexOf(postDetail.loginUser);

    indexOfPostLiker > -1
      ? postDetail.likes.splice(indexOfPostLiker, 1)
      : postDetail.likes.push(this.postDetail.loginUser);

    const params = {
      postId: postId,
      liked: indexOfPostLiker === -1,
    };

    this.postService.likePost(params).subscribe((response) => {
      postDetail.likes = response;
    });
  }

  public handleDoubleClickPhoto(e): void {
    let postedPhoto = { ...this.postedPhoto };
    const postId = this.postedPhoto.postId;
    const indexOfPostLiker = postedPhoto.likes.indexOf(this.profileInfo.userId);

    if (indexOfPostLiker === -1) {
      postedPhoto.likes.push(this.profileInfo.userId);

      const params = {
        postId: postId,
        liked: true,
      };

      this.postService.likePost(params).subscribe((response) => {
        postedPhoto.likes = response;
      });
    }
  }
}
