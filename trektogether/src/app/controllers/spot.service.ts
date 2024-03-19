import { Injectable } from '@angular/core';
import { Spot } from '../models/spot';
import { BehaviorSubject, Observable, sample, tap } from 'rxjs';
import { sample_spots } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { SPOTS_BY_ID_URL, SPOTS_BY_SEARCH_URL, SPOTS_URL, SPOT_CREATE_URL } from '../shared/costants/urls';
import { ICreateSpot } from '../shared/interfaces/ICreateSpot';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SpotService {
  toastrServices: any;
  private spotSubject = new BehaviorSubject<Spot>(this.getSpotFromLocalStorage());
  public SpotObservable : Observable<Spot>;
  constructor(private http : HttpClient, private toastrService : ToastrService) 
    {
      this.SpotObservable = this.spotSubject.asObservable();
      }


  getAll(): Observable<Spot[]> {
    return this.http.get<Spot[]>(SPOTS_URL);
  }

  getAllSpotsBySearchTerm(searchTerm: string){
    return this.http.get<Spot[]>(SPOTS_BY_SEARCH_URL +searchTerm);
  }

  getSpotById(spodId:string): Observable<Spot>{
    return this.http.get<Spot>(SPOTS_BY_ID_URL + spodId);
  }

  createSpot(NewSpot : ICreateSpot): Observable<Spot>{
    return this.http.post<Spot>(SPOT_CREATE_URL, NewSpot).pipe(
      tap({
        next:(spot) =>{
          this.setSpotToLocalStorage(spot);
          this.spotSubject.next(spot);
          this.toastrService.success(`Spot created successfully`, 'Spot created');
        },
        error: (errorResponse) =>{
          this.toastrServices.error(errorResponse.error, 'Spot creation failed');
        }
      })
    );
  }

  getSpotFromLocalStorage(): Spot {
    const spot = localStorage.getItem('Spot');
    return spot ? JSON.parse(spot) : new Spot();
  }

  setSpotToLocalStorage(spot: Spot){
    localStorage.setItem('Spot', JSON.stringify(spot));
  }
}
