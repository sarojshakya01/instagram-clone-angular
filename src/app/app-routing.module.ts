import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { PageNotFoundComponent } from './components/pages/error-page/page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: ':user_id', component: ProfilePageComponent },
  { path: 'explore/locations', component: HomePageComponent },
  { path: 'explore/people', component: HomePageComponent },
  { path: 'accounts/edit', component: HomePageComponent },
  { path: 'explore', component: HomePageComponent },
  { path: 'direct/inbox', component: HomePageComponent },
  { path: 'accounts/activity', component: HomePageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
