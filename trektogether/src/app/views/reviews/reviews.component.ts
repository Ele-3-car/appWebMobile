
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ReviewService } from 'src/app/controllers/review.service';
import { UserService } from 'src/app/controllers/user.service';
import { reviews } from 'src/app/models/reviews';
import { user } from 'src/app/shared/user';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit{
  reviewIsCreated = false;
  creationForm !: FormGroup;
  returnUrl = '';
  review !: reviews;
  user !: user;
  showScreen : boolean = false;

  constructor(private formBuilder : FormBuilder,
    private reviewService : ReviewService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private userService : UserService) {}

  ngOnInit(): void {
    this.creationForm = this.formBuilder.group({
      name: [''],
      review: [''],
      stars: [''],
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get fc(){
  return this.creationForm.controls;
  }

  create(){
    if(this.creationForm.invalid) return;
    const fv = this.creationForm.value;
    const reviewCreated : reviews ={
      id: '',
      name: fv.name,
      review: fv.review,
      stars: fv.stars,
    };
    this.reviewIsCreated = true;
    this.reviewService.createReview(reviewCreated).subscribe(_=>{
      this.router.navigateByUrl(this.returnUrl);
    });
  }

  goBack(){
    this.router.navigateByUrl(this.returnUrl);
  }

  isAuth(){
    return this.user.token;
  }
}


