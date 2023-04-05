import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ShoppableCard } from "../DigsComps/digs-card/shoppable.card";
import { AlbumCard } from "./album.card";


@Injectable(
    {providedIn: 'root'}
)
export class CardsService{
    private baseUrl:string = "https://discogs-app-723a9-default-rtdb.firebaseio.com/";
    private albumsEndPoint = "albums.json";
    private shoppiesEndPoint = "shoppies.json"

    constructor(private http:HttpClient){

    }

    getCards(){
        return this.http.get<AlbumCard []>(this.baseUrl + this.albumsEndPoint);
    }
    getShoppies(){
        return this.http.get<ShoppableCard []>(this.baseUrl + this.shoppiesEndPoint);
    }
}