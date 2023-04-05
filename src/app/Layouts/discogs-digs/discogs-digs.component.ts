import { Component } from '@angular/core';
import { ShoppableCard } from 'src/app/DigsComps/digs-card/shoppable.card'; //copy relative path, change to forward slashes, take out .ts at the end
//import { mock_shopping_list } from 'src/app/DigsComps/digs-card/mock_shopping_list';
import { CardsService } from 'src/app/card/cards.service';

@Component({
  selector: 'app-discogs-digs',
  templateUrl: './discogs-digs.component.html',
  styleUrls: ['./discogs-digs.component.css']
})
export class DiscogsDigsComponent {
  shoppies: ShoppableCard [] = [];

  constructor(private shoppableCard:CardsService){
  //  for (var item of mock_shopping_list){
  //    console.log(item);
  //    this.shoppies.push(item);
  //  }
  }
  ngOnInit(): void{
    this.shoppableCard.getShoppies().subscribe((data: ShoppableCard []) => {
      for (var x of data){
        console.log(x)
        this.shoppies.push(x)
      }
    })
  }
}
