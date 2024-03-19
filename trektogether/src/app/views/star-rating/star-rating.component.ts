import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {

@Input()
star!: number;

@Input()
size: number = 1;

get styles(){
  return {
    'widht.rem': this.size,
    'height.rem':this.size,
    'marginRight.rem': this.size/6
   }
}
getStarImage(current:number):string{
  const previousHalf = current - 0.5;
  const imageName = 
  this.star >= current
  ? 'star-full'
  : this.star >= previousHalf
  ? 'star-half' 
  : 'star-empty';
  return `../../../assets/star-rating/${imageName}.svg`;

}

}
