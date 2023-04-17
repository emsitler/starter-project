import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ShoppableCard } from "../DigsComps/digs-card/shoppable.card";
import { AlbumCard } from "./album.card";
import { AngularFireDatabase } from "@angular/fire/compat/database";


@Injectable(
    {providedIn: 'root'}
)
export class CardsService{
    //private baseUrl:string = "https://discogs-app-723a9-default-rtdb.firebaseio.com/";
    //private albumsEndPoint = "albums.json";
    //private shoppiesEndPoint = "shoppies.json"

    constructor(private db:AngularFireDatabase){
    }

    getCards(){
        return this.db.list<AlbumCard>("albums").valueChanges();
    }
    getShoppies(){
        return this.db.list<ShoppableCard>("shoppies").valueChanges();
    }

    addAlbum(alb:AlbumCard){
        this.db.list<AlbumCard>("albums").push(alb);
    }
}