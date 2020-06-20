import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/modules/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  @Input() profileInfo;

  public fetched: boolean = false;
  public posts: Post[] = [];
  public modifiedPosts: any = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.fetched = true;
      this.posts = posts;
      this.posts.shift();
      for (let i = 0; i < this.posts.length; i++) {
        this.modifiedPosts[i] = this.posts[i];
        this.modifiedPosts[i]['postId'] = i + 1;
      }
    });
  }
}
