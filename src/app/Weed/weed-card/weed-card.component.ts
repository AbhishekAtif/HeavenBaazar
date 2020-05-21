import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weed-card',
  templateUrl: './weed-card.component.html',
  styleUrls: ['./weed-card.component.css']
})
export class WeedCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  Herb: any ={
    "Id":1,
    "Name":"H1",
    "Type":"T1",
    "Price": 100.00
  }
}
