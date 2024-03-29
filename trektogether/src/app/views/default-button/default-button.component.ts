import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css']
})
export class DefaultButtonComponent implements OnInit{
@Input() 
type: 'submit' | 'button' = 'submit';
@Input()
text:string = 'Submit';
@Input()
bgColor: string = '#0F3046';
@Input()
color = "white";
@Input()
fontSizeRem = 1.3;
@Input()
widthRem = 12;
@Output()
onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
