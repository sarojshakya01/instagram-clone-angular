class Bio {
  intro: string;
  website: string;
}

export class User {
  userId: string;
  userName: string;
  profilePhoto: string;
  followedBy: Array<Object>;
  follows: Array<Object>;
  bio: Bio;
  posts: Array<Object>;
}

export class UserResponse {
  userid: string;
  username: string;
  profilephoto: string;
  followedby: Array<Object>;
  follows: Array<Object>;
  bio: Bio;
  posts: Array<Object>;
}
