export class ShoppableCard {
    name: string;
    band: string;
    img: string;
    year: string;
    tags: string;
    copies: string;
    price: string;


    constructor(name: string, band: string, img: string, year: string,  tags: string, copies: string, price: string){
        this.img =img;
        this.band=band;
        this.name = name;
        this.year = year;
        this.tags = tags;
        this.copies = copies;
        this.price = price;
    }
}