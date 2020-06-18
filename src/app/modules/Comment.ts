export class Comment {
  commentBy: string;
  mention: string;
  comment: string;
  likes: Array<Object>;
  comments: Comment;
  posttime: string;
}

export class CommentResponse {
  commentby: string;
  mention: string;
  comment: string;
  likes: Array<Object>;
  comments: Comment;
  posttime: string;
}
