import { Component } from '@angular/core';
import { AlbumCard } from 'src/app/card/album.card';
import { mock_album_list } from 'src/app/card/mock_album_list';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
  albums: AlbumCard [] = [];

  constructor(){
    for (var item of mock_album_list){
      console.log(item);
      this.albums.push(item);
    }
  }
}
