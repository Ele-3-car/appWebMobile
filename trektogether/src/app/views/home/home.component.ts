import { Component, OnInit } from '@angular/core';
import { SpotService } from 'src/app/controllers/spot.service';
import { Spot } from 'src/app/models/spot';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/controllers/user.service';
import { user } from 'src/app/shared/user';
import { reviews } from 'src/app/models/reviews';
import { ReviewService } from 'src/app/controllers/review.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
spots : Spot[] = [];
review: reviews[] = [];
user !: user;
showWelcomeScreen: boolean = true;
  constructor(private spotService:SpotService, private activatedRoute: ActivatedRoute,
    private userService: UserService, private reviewService : ReviewService) {
    
      userService.userObservable.subscribe((newUser)=>{
        this.user = newUser;
      });
    
    let spotsObservable : Observable<Spot[]>;
    let reviewObservable : Observable<reviews[]>;    
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm){
        spotsObservable = this.spotService.getAllSpotsBySearchTerm(params.searchTerm);
        this.showWelcomeScreen = false;
      }else{
        spotsObservable = spotService.getAll();
        this.showWelcomeScreen = true;

        reviewObservable = reviewService.getAll();
      }

      spotsObservable.subscribe((serverspots) =>{
        this.spots = serverspots;
      })

      reviewObservable.subscribe((serverReview)=>{
        this.review = serverReview;
      })
    })
    
   }

  ngOnInit(): void {
  }

  getAll(){
    this.showWelcomeScreen = false;
    this.spotService.getAll().subscribe((serverSpots) =>{
      this.spots = serverSpots;
    });
    
  }

 

  get isAuth(){
    return this.user.token;
  }

  back(){
    this.showWelcomeScreen = true;
    return this.showWelcomeScreen;
  }



  immagini = [
    {
      imageSrc: "../src/../../../assets/carouselIMG/1.png",
      imageAlt: "londra"
    },
    {
      imageSrc: "../src/../../../assets/carouselIMG/2.png",
      imageAlt: "londra"
    },
    {
      imageSrc: "../src/../../../assets/carouselIMG/3.png",
      imageAlt: "londra"
    },
    {
      imageSrc: "../src/../../../assets/carouselIMG/4.png",
      imageAlt: "londra"
    },
    {
      imageSrc: "../src/../../../assets/carouselIMG/5.png",
      imageAlt: "londra"
    },
  ]


 
}
