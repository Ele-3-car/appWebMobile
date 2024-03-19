import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ICreateReview } from '../shared/interfaces/ICreateReviews';
import { ToastrService } from 'ngx-toastr';
import { reviews } from '../models/reviews';
import { REVIEWS_CREATE_URL } from '../shared/costants/urls';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  toastrServices: any;
  private reviewSubject = new BehaviorSubject<reviews>(this.getReviewFromLocalStorage());
  public reviewsObservable : Observable<reviews>;
  constructor(private httpClient: HttpClient, private toastrService : ToastrService) { 
    this.reviewsObservable = this.reviewSubject.asObservable();
  }


  getAll(): Observable<reviews[]> {
    return this.httpClient.get<reviews[]>(REVIEWS_CREATE_URL);
  }

  createReview(NewReview : ICreateReview): Observable<reviews>{
    return this.httpClient.post<reviews>(REVIEWS_CREATE_URL, NewReview).pipe(
      tap({
        next:(review) =>{
          this.setReviewToLocalStorage(review);
          this.reviewSubject.next(review);
          this.toastrService.success(`Review created successfully`, 'Review created');
        },
        error: (errorResponse) =>{
          this.toastrServices.error(errorResponse.error, 'Review creation failed');
        }
      })
        
    );
  }

  getReviewFromLocalStorage(): reviews {
    const review = localStorage.getItem('Review');
    return review ? JSON.parse(review) : new reviews();
  }

  setReviewToLocalStorage(review: reviews){
    localStorage.setItem('Review', JSON.stringify(review));
  }
}
