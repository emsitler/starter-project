export class AlbumCard {
    name: string;
    imgDescription: string;
    band: string;
    img: string;

    constructor(name: string, imgDescription: string, band: string, img: string){
        this.img =img;
        this.imgDescription = imgDescription;
        this.band=band;
        this.name = name;
    }
}