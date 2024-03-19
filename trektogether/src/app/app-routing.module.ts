import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SpotPageComponent } from './views/spot-page/spot-page.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterPageComponent } from './views/register-page/register-page.component';
import { CreateSpotComponent } from './views/create-spot/create-spot.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ContattiComponent } from './views/contatti/contatti.component';
import { AdviceComponent } from './views/advice/advice.component';
import { ReviewsComponent } from './views/reviews/reviews.component';



const routes: Routes = [
  {path:'search/:searchTerm', component: HomeComponent},
  {path:'', component: HomeComponent},
  {path:'spot/:id', component: SpotPageComponent},
  {path:'login', component: LoginComponent},
  {path: 'register', component:RegisterPageComponent},
  {path:'contatti', component:ContattiComponent },
  {path: 'create', component: CreateSpotComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'trip', component: AdviceComponent},
  {path: 'reviews', component: ReviewsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
