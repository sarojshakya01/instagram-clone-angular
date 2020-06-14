import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['/src/app/app.component.css', './story.component.css'],
})
export class StoryComponent implements OnInit {
  @Input() profileInfo;

  public fetched: boolean = true;
  public stories = [
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

  public styleTransform = [];
  public visibleStories = [];
  public storyIndex: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.visibleStories = this.populateVisibleStories();
    this.createStyle();
  }

  public clickPrevStory(): void {
    if (this.storyIndex > 3) {
      this.storyIndex = this.storyIndex - 4;
    }
    this.visibleStories = this.populateVisibleStories();
  }

  public clickNextStory(): void {
    if (this.stories.length > this.storyIndex + 7) {
      this.storyIndex = this.storyIndex + 4;
    }
    this.visibleStories = this.populateVisibleStories();
  }

  private populateVisibleStories(): any {
    const uptoIndex =
      this.stories.length > this.storyIndex + 8
        ? this.storyIndex + 8
        : this.stories.length;

    let tempStories = [];
    for (let i = this.storyIndex; i < uptoIndex; i++) {
      tempStories.push(this.stories[i]);
    }

    return tempStories;
  }

  private createStyle(): void {
    this.stories.map((story, index) => {
      this.styleTransform.push({
        transform: 'translateX(' + 80 * index + 'px)',
      });
    });
  }
}
