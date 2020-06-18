import { Component, OnInit, Input } from '@angular/core';
import {
  Post,
  PostDetail,
  PostedByInfo,
  PostedPhoto,
} from 'src/app/modules/Post';

import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() profileInfo;

  public fetched: boolean = false;
  public imgUrl: string = '/assets/img/userdata/';
  public postByInfos: PostedByInfo[] = [];
  public postedPhotos: PostedPhoto[] = [];
  public postDetails: PostDetail[] = [];

  public posts: Post[] = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.fetched = true;
      this.posts = posts;
      this.posts.shift();

      for (let i = 0; i < this.posts.length; i++) {
        this.postByInfos.push({
          postBy: this.posts[i].postby,
          postByPhoto: this.imgUrl + this.posts[i].postbyphoto,
          location: this.posts[i].location,
        });
        this.postedPhotos.push({
          postId: this.posts[i].postid,
          postBy: this.posts[i].postby,
          photo: this.posts[i].photo,
        });
        this.postDetails.push({
          postId: this.posts[i].postid,
          postBy: this.posts[i].postby,
          loginUser: this.profileInfo.userId,
          caption: this.posts[i].caption,
          likes: this.posts[i].likes,
          comments: this.posts[i].comments,
          postTime: this.posts[i].posttime,
        });
      }
    });
  }

  public handleLikePhoto(postId): void {
    const postIndex = postId - 1;
    let postDetails = [...this.postDetails];

    const indexOfPostLiker = postDetails[postIndex].likes.indexOf(
      this.profileInfo.userId
    );

    indexOfPostLiker > -1
      ? postDetails[postIndex].likes.splice(indexOfPostLiker, 1)
      : postDetails[postIndex].likes.push(this.profileInfo.userId);
  }

  public handleClickPhoto(postId): void {
    const postIndex = postId - 1;
    let postDetails = [...this.postDetails];

    const indexOfPostLiker = postDetails[postIndex].likes.indexOf(
      this.profileInfo.userId
    );

    if (indexOfPostLiker === -1) {
      postDetails[postIndex].likes.push(this.profileInfo.userId);
    }
  }
}
