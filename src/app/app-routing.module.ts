import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { PageNotFoundComponent } from './components/pages/error-page/page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sarojsh01', component: ProfilePageComponent },
  { path: '_thehasinaaykahs_', component: ProfilePageComponent },
  { path: 'pooza_singh91', component: ProfilePageComponent },
  { path: 'bidhan.sthapit', component: ProfilePageComponent },
  { path: 'elna_stha', component: ProfilePageComponent },
  { path: 'rebatov', component: ProfilePageComponent },
  { path: 'ukg_umesh', component: ProfilePageComponent },
  { path: 'shrinkhala_', component: ProfilePageComponent },
  { path: 'sandeep_lamichhane25', component: ProfilePageComponent },
  { path: 'rajeshhamal', component: ProfilePageComponent },
  { path: 'rabi.lamichhane', component: ProfilePageComponent },
  { path: 'baburam.bhattarai', component: ProfilePageComponent },
  { path: 'paraskhadka77', component: ProfilePageComponent },
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
export class AppRoutingModule {}
