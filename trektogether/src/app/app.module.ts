import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './views/home/home.component';
import { SearchComponent } from './views/search/search.component';
import { StarRatingComponent } from './views/star-rating/star-rating.component';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { SpotPageComponent } from './views/spot-page/spot-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { LoginComponent } from './views/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {MatMenuModule} from '@angular/material/menu';
import { InputContainerComponent } from './views/input-container/input-container.component';
import { InputValidationComponent } from './views/input-validation/input-validation.component';
import { TextInputComponent } from './views/text-input/text-input.component';
import { DefaultButtonComponent } from './views/default-button/default-button.component';
import { RegisterPageComponent } from './views/register-page/register-page.component';
import { LoadingComponent } from './views/loading/loading.component';
import { LoadingInterceptorTsInterceptor } from './shared/interceptors/loading.interceptor.ts.interceptor';
import { CreateSpotComponent } from './views/create-spot/create-spot.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ContattiComponent } from './views/contatti/contatti.component';
import { AdviceComponent } from './views/advice/advice.component';
import { ReviewsComponent } from './views/reviews/reviews.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    StarRatingComponent,
    SpotPageComponent,
    NotFoundComponent,
    LoginComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    RegisterPageComponent,
    LoadingComponent,
    CreateSpotComponent,
    CarouselComponent,
    ProfileComponent,
    ContattiComponent,
    AdviceComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-bottom-right",
      newestOnTop: false,
    }),
    MatMenuModule,
    MatCardModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: LoadingInterceptorTsInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
