import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SpotService } from 'src/app/controllers/spot.service';
import { Spot } from 'src/app/models/spot';

@Component({
  selector: 'app-spot-page',
  templateUrl: './spot-page.component.html',
  styleUrls: ['./spot-page.component.css']
})
export class SpotPageComponent implements OnInit{
  returnUrl= '';
  spot !: Spot;
  constructor(private activatedRoute: ActivatedRoute, private spotService: SpotService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id){
        spotService.getSpotById(params.id).subscribe(serverSpot =>{
          this.spot = serverSpot;
        });
      }
    });
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }


  goBack(){
    this.router.navigateByUrl(this.returnUrl);
  }
}
