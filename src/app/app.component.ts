import { Component } from '@angular/core';
import { AlbumCard } from './card/album.card';
import { mock_album_list } from './card/mock_album_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starter-project';
  albums: AlbumCard [] = [];

  constructor(){
    for (var item of mock_album_list){
      console.log(item);
      this.albums.push(item);
    }
  }
}
