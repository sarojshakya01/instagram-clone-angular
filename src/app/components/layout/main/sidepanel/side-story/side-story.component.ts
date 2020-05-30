import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-story',
  templateUrl: './side-story.component.html',
  styleUrls: ['./side-story.component.css'],
})
export class SideStoryComponent implements OnInit {
  fetched: boolean = true;
  stories = [
    {
      userId: 'pooza_singh91',
      profilePhoto: '/assets/img/userdata/pooza_singh91_profilephoto.jpg',
      storyDate: 'Tue May 05 2020 00:03:30 GMT+0545 (Nepal Time)',
    },
    {
      userId: 'bidhan.sthapit',
      profilePhoto: '/assets/img/userdata/bidhan.sthapit_profilephoto.jpg',
      storyDate: 'Tue May 05 2020 01:19:00 GMT+0545 (Nepal Time)',
    },
    {
      userId: 'rebatov',
      profilePhoto: '/assets/img/userdata/rebatov_profilephoto.jpg',
      storyDate: 'Tue May 05 2020 00:55:00 GMT+0545 (Nepal Time)',
    },
    {
      userId: 'elna_stha',
      profilePhoto: '/assets/img/userdata/elna_stha_profilephoto.jpg',
      storyDate: 'Tue May 05 2020 00:02:00 GMT+0545 (Nepal Time)',
    },
    {
      userId: '_thehasinaaykahs_',
      profilePhoto: '/assets/img/userdata/_thehasinaaykahs__profilephoto.jpg',
      storyDate: 'Tue May 05 2020 00:00:00 GMT+0545 (Nepal Time)',
    },
    {
      userId: 'ukg_umesh',
      profilePhoto: '/assets/img/userdata/ukg_umesh_profilephoto.jpg',
      storyDate: 'Tue May 05 2020 00:00:00 GMT+0545 (Nepal Time)',
    },
    {
      userId: 'shrinkhala_',
      profilePhoto: '/assets/img/userdata/shrinkhala__profilephoto.jpg',
      storyDate: 'Tue May 05 2020 00:00:00 GMT+0545 (Nepal Time)',
    },
    {
      userId: 'paraskhadka77',
      profilePhoto: '/assets/img/userdata/paraskhadka77_profilephoto.jpg',
      storyDate: 'Tue May 05 2020 00:00:00 GMT+0545 (Nepal Time)',
    },
    {
      userId: 'rajeshhamal',
      profilePhoto: '/assets/img/userdata/rajeshhamal_profilephoto.jpg',
      storyDate: 'Tue May 05 2020 00:00:00 GMT+0545 (Nepal Time)',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
