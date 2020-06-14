import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() profileInfo;

  public fetched: boolean = false;
  public imgUrl: string = '/assets/img/userdata/';
  public liked: boolean = false;
  public postByInfo: Array<Object> = [];
  public postedPhoto: Array<Object> = [];
  public postDetails: any = [];

  public posts = [
    {
      postId: 1,
      postBy: 'sarojsh01',
      postByPhoto: this.imgUrl + 'sarojsh01_profilephoto.jpg',
      photo: [
        'sarojsh01_photo1.jpg',
        'sarojsh01_photo2.jpg',
        'sarojsh01_photo3.jpg',
      ],
      location: 'Bhaktapur, Nepal',
      caption: 'This is my 1st insta post lol',
      likes: [
        'elna_stha',
        'rebatov',
        'bidhan.sthapit',
        'pooza.singh91',
        'rajesh.hamal',
        'sarojsh01',
      ],
      comments: [
        {
          commentBy: 'pooza_singh91',
          mention: 'sarojsh01',
          comment: '😂',
          likes: ['pooza_singh91', 'bidhan.sthapit'],
        },
        {
          commentBy: 'bidhan.sthapit',
          mention: 'sarojsh01',
          comment: 'lol 😂',
          likes: ['sarojsh01'],
        },
        {
          commentBy: 'rebatov',
          mention: 'sarojsh01',
          comment: 'haha 😂',
          likes: ['sarojsh01'],
        },
        {
          commentBy: 'elna_stha',
          mention: 'sarojsh01',
          comment: 'haha 😂',
          likes: [],
        },
      ],
      postTime: '2020-05-03T08:12:12.002Z',
    },
    {
      postId: 2,
      postBy: '_thehasinaaykahs_',
      postByPhoto: this.imgUrl + '_thehasinaaykahs__profilephoto.jpg',
      photo: ['_thehasinaaykahs__photo1.jpg'],
      location: 'Ghandruk',
      caption: 'Ghumn Gham',
      likes: ['sarojsh01'],
      comments: [
        {
          commentBy: 'sarojsh01',
          mention: '_thehasinaaykahs_',
          comment: '😂',
          likes: ['_thehasinaaykahs_'],
        },
        {
          commentBy: '_thehasinaaykahs_',
          mention: 'sarojsh01',
          comment: 'lol 😂',
          likes: ['sarojsh01'],
        },
        {
          commentBy: 'pooza_singh91',
          mention: 'sarojsh01',
          comment: 'lol 😂',
          likes: ['_thehasinaaykahs_'],
        },
      ],
      postTime: '2020-04-31T08:12:12.002Z',
    },
    {
      postId: 3,
      postBy: 'pooza_singh91',
      postByPhoto: this.imgUrl + 'pooza_singh91_profilephoto.jpg',
      photo: ['pooza_singh91_photo1.jpg'],
      location: 'Dhangadi, Nepal',
      caption: 'Lock Down time pass',
      likes: ['sarojsh01'],
      comments: [
        {
          commentBy: 'sarojsh01',
          mention: 'pooza_singh91',
          comment: '😂',
          likes: ['pooza_singh91'],
        },
        {
          commentBy: 'pooza_singh91',
          mention: 'sarojsh01',
          comment: 'lol 😂',
          likes: ['sarojsh01'],
        },
        {
          commentBy: '_thehasinaaykahs_',
          mention: 'sarojsh01',
          comment: 'lol 😂',
          likes: ['pooza_singh91'],
        },
      ],
      postTime: '2020-04-31T08:12:12.002Z',
    },
    {
      postId: 4,
      postBy: 'bidhan.sthapit',
      postByPhoto: this.imgUrl + 'bidhan.sthapit_profilephoto.jpg',
      photo: ['bidhan.sthapit_photo1.jpg'],
      location: 'Banasthali, Kathmandu',
      caption: 'Photo khichna lako',
      likes: ['elna_stha', 'rebatov', 'bidhan.sthapit'],
      comments: [
        {
          commentBy: 'sarojsh01',
          mention: 'bidhan.sthapit',
          comment: '😂',
          likes: ['bidhan.sthapit'],
        },
        {
          commentBy: 'rebatov',
          mention: 'bidhan.sthapit',
          comment: 'haha 😂',
          likes: [],
        },
        {
          commentBy: 'elna_stha',
          mention: 'bidhan.sthapit',
          comment: 'haha 😂',
          likes: [],
        },
      ],
      postTime: '2020-03-12T08:05:12.002Z',
    },
    {
      postId: 5,
      postBy: 'elna_stha',
      postByPhoto: this.imgUrl + 'elna_stha_profilephoto.jpg',
      photo: ['elna_stha_photo1.jpg'],
      location: 'Lalitpur',
      caption: 'dherai mitho khane kura',
      likes: ['elna_stha', 'rebatov', 'bidhan.sthapit', 'sarojsh01'],
      comments: [
        {
          commentBy: 'sarojsh01',
          mention: 'elna_stha',
          comment: '😂',
          likes: [],
        },
        {
          commentBy: 'bidhan.sthapit',
          mention: 'elna_stha',
          comment: 'lol 😂',
          likes: [],
        },
        {
          commentBy: 'rebatov',
          mention: 'elna_stha',
          comment: 'haha 😂',
          likes: [],
        },
      ],
      postTime: '2020-04-06T03:12:12.002Z',
    },
    {
      postId: 6,
      postBy: 'rebatov',
      postByPhoto: this.imgUrl + 'rebatov_profilephoto.jpg',
      photo: ['rebatov_photo1.jpg', 'rebatov_photo2.jpg'],
      location: 'Kathmandu, Nepal',
      caption: 'kati ramro chara',
      likes: ['elna_stha', 'rebatov', 'bidhan.sthapit'],
      comments: [
        {
          commentBy: 'sarojsh01',
          mention: 'rebatov',
          comment: '😂',
          likes: [],
        },
        {
          commentBy: 'bidhan.sthapit',
          mention: 'rebatov',
          comment: 'lol 😂',
          likes: [],
        },
        {
          commentBy: 'elna_stha',
          mention: 'rebatov',
          comment: 'haha 😂',
          likes: [],
        },
      ],
      postTime: '2020-05-01T08:55:12.002Z',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.posts.length; i++) {
      this.postByInfo.push({
        postBy: this.posts[i].postBy,
        postByPhoto: this.posts[i].postByPhoto,
        location: this.posts[i].location,
      });
      this.postedPhoto.push({
        postBy: this.posts[i].postBy,
        photo: this.posts[i].photo,
      });
      this.postDetails.push({
        postBy: this.posts[i].postBy,
        loginUser: this.profileInfo.userId,
        caption: this.posts[i].caption,
        likes: this.posts[i].likes,
        comments: this.posts[i].comments,
        postTime: this.posts[i].postTime,
      });
    }
  }

  public handleClickPhoto(postId): void {
    let postsDetails = [...this.postDetails];

    const indexOfPostLiker = postsDetails[postId].likes.indexOf(
      this.profileInfo.userId
    );

    indexOfPostLiker > -1
      ? postsDetails[postId].likes.splice(indexOfPostLiker, 1)
      : postsDetails[postId].likes.push(this.profileInfo.userId);

    this.liked = indexOfPostLiker <= 0;
  }
}
