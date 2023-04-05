import { Component } from '@angular/core';
import { AlbumCard } from './card/album.card';
import { ShoppableCard } from './DigsComps/digs-card/shoppable.card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'starter-project';
  albums: AlbumCard [] = [];
  shoppies: ShoppableCard [] = [];
  constructor(){
  }
}
