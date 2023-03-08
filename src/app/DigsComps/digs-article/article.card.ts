import { UpperCasePipe } from "@angular/common";

export class ArticleCard {
    img: string;
    title: string;
    type: string;
    description: string;


    constructor(type: string, title: string, img: string, description: string){
        this.img =img;
        this.title=title;
        this.type = type.toUpperCase();
        this.description = description;
    }
}