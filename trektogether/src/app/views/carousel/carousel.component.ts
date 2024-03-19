import { Component, Input, OnInit } from '@angular/core';


interface carouselImages{
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  @Input() images: carouselImages[] = []
  @Input() indicator = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() interval = 5000;
  selectedIndex = 0;
  constructor() { }
  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void{
    setInterval(()=>{
      this.selectedIndex = this.selectedIndex < this.images.length - 1 ? this.selectedIndex + 1 : 0;
    }, this.interval)
  }

  selectedImage(index : number):void{
    this.selectedIndex = index;
  }
  
}


