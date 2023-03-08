import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digs-article',
  templateUrl: './digs-article.component.html',
  styleUrls: ['./digs-article.component.css']
})
export class DigsArticleComponent implements OnInit {
  @Input() title: string;
  @Input() type: string;
  @Input() img: string;
  @Input() description: string;

  constructor() {
    this.img ="No img found";
    this.type = "???";
    this.title = "???";
    this.description = "";
}
ngOnInit(): void{

}
}
