import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotService } from 'src/app/controllers/spot.service';
import { ICreateSpot } from 'src/app/shared/interfaces/ICreateSpot';
import { user } from 'src/app/shared/user';

@Component({
  selector: 'app-create-spot',
  templateUrl: './create-spot.component.html',
  styleUrls: ['./create-spot.component.css']
})
export class CreateSpotComponent implements OnInit{

  spotIsCreated = false;
  creationForm!: FormGroup;
  returnUrl = '';
  user !: user;
  showScreen : boolean = false;
  imageData?: string;

  constructor(private formBuilder: FormBuilder,
    private spotService : SpotService,
    private activatedRoute : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.creationForm = this.formBuilder.group({
      image:[''],
      name: ['', [Validators.required,Validators.minLength(5)]],
      city: ['', [Validators.required]],
      description: ['', [Validators.required]],
      shortDescription: ['', [Validators.required,Validators.maxLength(50)]],
      stars: ['', [Validators.required,Validators.min(0),Validators.max(5)]],
      visited: ['', [Validators.required]],
      toEat: ['', [Validators.required]],
      duration: ['', [Validators.required,Validators.min(1)]]
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }


  get fc(){
    return this.creationForm.controls;
  }

  create(){
    if(this.creationForm.invalid) return;
    const fv = this.creationForm.value;
    const spotCreated : ICreateSpot ={
      id: '',
      image: fv.image,
      name: fv.name,
      city: fv.city,
      description: fv.description,
      shortDescription: fv.shortDescription,
      stars: fv.stars,
      visited: fv.visited,
      toEat: fv.toEat,
      duration: fv.duration,
      longitude: 0,
      latitude: 0
    };
    this.spotIsCreated = true;
    this.spotService.createSpot(spotCreated).subscribe(_=>{
      this.router.navigateByUrl(this.returnUrl);
    })
    }

    goBack(){
      this.router.navigateByUrl(this.returnUrl);
    }

    get isAuth(){
      return this.user.token;
    }

    onFileSelected(event: Event){
      const file = (event.target as HTMLInputElement).files![0];
      this.creationForm.get('image')!.setValue(file);
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      if(file && allowedTypes.includes(file.type)){
        const reader = new FileReader();
        reader.onload = () => {
          this.imageData = reader.result as string;
        }
        reader.readAsDataURL(file);
      }
    }
  
}
