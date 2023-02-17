import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
  export class CardComponent implements OnInit {
   @Input() name: string;
   @Input() imgDescription: string;
   @Input() band: string;
   @Input() img: string;

    constructor() {
      this.img ="No img found";
      this.imgDescription = "No description found"
      this.name = "No name found";
      this.band = "No band found"
  }

  ngOnInit(): void{

  }
}
