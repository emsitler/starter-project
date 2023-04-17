import { Component, OnInit } from '@angular/core';
import { CardsService } from '../card/cards.service';
import { AlbumCard } from '../card/album.card';
import { ShoppableCard } from '../DigsComps/digs-card/shoppable.card';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrls: ['./add-comp.component.css']
})
export class AddCompComponent implements OnInit {

  constructor(private cd:CardsService) { }

  ngOnInit(): void {
  }

  addItem(album:AlbumCard){
    console.log("You Clicked the button");
    console.log(album);
    this.cd.addAlbum(album)
  }

}
