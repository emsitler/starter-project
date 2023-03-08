import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digs-card',
  templateUrl: './digs-card.component.html',
  styleUrls: ['./digs-card.component.css']
})
export class DigsCardComponent implements OnInit {
  @Input() name: string;
  @Input() band: string;
  @Input() img: string;
  @Input() year: string;
  @Input() tags: string;
  @Input() copies: string;
  @Input() price: string;

   constructor() {
     this.img ="No img found";
     this.name = "No name found";
     this.band = "No band found";
     this.year = "No year found";
     this.tags = "No tags found"
     this.copies = "Unknown";
     this.price = "???";

}
ngOnInit(): void{

}
}
