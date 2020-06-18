import { Comment } from 'src/app/modules/Comment';

export class Post {
  postid: number;
  postby: string;
  postbyphoto: string;
  photo: Array<Object>;
  location: string;
  caption: string;
  likes: Array<Object>;
  comments: Comment;
  posttime: string;
}

export class PostDetail {
  postId: number;
  postBy: string;
  loginUser: string;
  caption: string;
  likes: Array<Object>;
  comments: Comment;
  postTime: string;
}

export class PostedPhoto {
  postId: number;
  postBy: string;
  photo: Array<Object>;
}

export class PostedByInfo {
  postBy: string;
  postByPhoto: string;
  location: string;
}
