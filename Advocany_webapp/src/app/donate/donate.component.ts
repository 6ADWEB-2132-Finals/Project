import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
  animations: [
    trigger('fade',[
      transition('void =>*',[
        style({ opacity:0, }),
        animate(1000,style({opacity:1}))
      ])
    ]),
  ]
})
export class DonateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
