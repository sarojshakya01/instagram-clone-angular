import { Component, OnInit, Input } from '@angular/core';
import { Story } from 'src/app/modules/Story';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['/src/app/app.component.css', './story.component.css'],
})
export class StoryComponent implements OnInit {
  @Input() profileInfo;

  public fetched: boolean = true;
  public stories: Story[] = [];
  public styleTransform = [];
  public visibleStories: Story[] = [];
  public imgUrl: string = '/assets/img/userdata/';
  public storyIndex: number = 0;

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
      this.visibleStories = this.populateVisibleStories();
      this.createStyle();
    });
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
