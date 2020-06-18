import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/modules/Story';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-side-story',
  templateUrl: './side-story.component.html',
  styleUrls: ['./side-story.component.css'],
})
export class SideStoryComponent implements OnInit {
  public fetched: boolean = true;
  public watchAll: boolean = false;
  public dispStories: Story[] = [];
  public imgUrl: string = '/assets/img/userdata/';
  public stories: Story[] = [];

  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
    this.storyService.getStories().subscribe((stories) => {
      this.fetched = true;
      for (let i = 0; i < stories.length; i++) {
        this.stories.push({
          userId: stories[i].userid,
          profilePhoto: this.imgUrl + stories[i].profilephoto,
          storyDate: stories[i].storydate,
        });
      }
      this.dispStories = this.getStories();
    });
  }

  public handleWatchAll = () => {
    this.watchAll = !this.watchAll;
    this.dispStories = this.getStories();
  };

  private getStories = () => {
    if (this.watchAll) {
      return this.stories;
    } else {
      let storyList = [];
      const uptoIndex = this.stories.length > 8 ? 8 : this.stories.length;

      for (let i = 0; i < uptoIndex; i++) {
        storyList.push(this.stories[i]);
      }
      return storyList;
    }
  };
}
