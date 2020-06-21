import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { BrandComponent } from './components/layout/nav/brand/brand.component';
import { SearchComponent } from './components/layout/nav/search/search.component';
import { IconsComponent } from './components/layout/nav/icons/icons.component';
import { ActivityComponent } from './components/layout/nav/icons/activity/activity.component';
import { DirectComponent } from './components/layout/nav/icons/direct/direct.component';
import { ExploreComponent } from './components/layout/nav/icons/explore/explore.component';
import { HomeComponent } from './components/layout/nav/icons/home/home.component';
import { ProfileComponent } from './components/layout/nav/icons/profile/profile.component';
import { MainComponent } from './components/layout/main/main.component';
import { PostListComponent } from './components/layout/main/post-list/post-list.component';
import { PostComponent } from './components/layout/main/post-list/post/post.component';
import { StoryComponent } from './components/layout/main/story/story.component';
import { StoryIconComponent } from './components/layout/main/story/story-icon/story-icon.component';
import { SidepanelComponent } from './components/layout/main/sidepanel/sidepanel.component';
import { PhotoComponent } from './components/layout/main/post-list/post/photo/photo.component';
import { HeaderComponent } from './components/layout/main/post-list/post/header/header.component';
import { DescriptionComponent } from './components/layout/main/post-list/post/description/description.component';
import { PostOptionComponent } from './components/layout/main/post-list/post/post-option/post-option.component';
import { AddCommentComponent } from './components/layout/main/post-list/post/description/add-comment/add-comment.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SuggestionComponent } from './components/layout/main/sidepanel/suggestion/suggestion.component';
import { SideProfileComponent } from './components/layout/main/sidepanel/side-profile/side-profile.component';
import { SideStoryComponent } from './components/layout/main/sidepanel/side-story/side-story.component';
import { TimebarComponent } from './components/layout/main/post-list/post/description/timebar/timebar.component';
import { IconbarComponent } from './components/layout/main/post-list/post/description/iconbar/iconbar.component';
import { LikebarComponent } from './components/layout/main/post-list/post/description/likebar/likebar.component';
import { CaptionbarComponent } from './components/layout/main/post-list/post/description/captionbar/captionbar.component';
import { CommentbarComponent } from './components/layout/main/post-list/post/description/commentbar/commentbar.component';
import { CommentComponent } from './components/layout/main/post-list/post/description/commentbar/comment/comment.component';
import { SuggestionRowComponent } from './components/layout/main/sidepanel/suggestion/suggestion-row/suggestion-row.component';
import { StoryRowComponent } from './components/layout/main/sidepanel/side-story/story-row/story-row.component';
import { SearchSuggestionComponent } from './components/layout/nav/search/search-suggestion/search-suggestion.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { PageNotFoundComponent } from './components/pages/error-page/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BrandComponent,
    SearchComponent,
    IconsComponent,
    ActivityComponent,
    DirectComponent,
    ExploreComponent,
    HomeComponent,
    ProfileComponent,
    MainComponent,
    PostListComponent,
    PostComponent,
    StoryComponent,
    StoryIconComponent,
    SidepanelComponent,
    PhotoComponent,
    HeaderComponent,
    DescriptionComponent,
    PostOptionComponent,
    AddCommentComponent,
    FooterComponent,
    SuggestionComponent,
    SideProfileComponent,
    SideStoryComponent,
    TimebarComponent,
    IconbarComponent,
    LikebarComponent,
    CaptionbarComponent,
    CommentbarComponent,
    CommentComponent,
    SuggestionRowComponent,
    StoryRowComponent,
    SearchSuggestionComponent,
    ProfilePageComponent,
    HomePageComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
