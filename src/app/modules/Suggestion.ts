export class SuggestionResponse {
  userid: string;
  username: string;
  profilephoto: string;
  followedby: any;
  follows: any;
}

export class Suggestion {
  userId: string;
  userName: string;
  profilePhoto: string;
  isFollowedBy: boolean;
  commonFollowedBy: Array<Object>;
}
