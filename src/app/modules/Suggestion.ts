export class SuggestionResponse {
  useid: string;
  username: string;
  profilephoto: string;
  followedby: Array<Object>;
}

export class Suggestion {
  userId: string;
  userName: string;
  profilePhoto: string;
  isFollowedBy: boolean;
  commonFollowedBy: Array<Object>;
}
