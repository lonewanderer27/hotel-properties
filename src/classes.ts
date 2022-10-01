import { Review } from "./interfaces";

// Main Property Class
export class MainProperty {
    reviews: Review[]
    src: string
    title: string

    constructor(reviews: Review[], src: string, title: string) {
        this.reviews = reviews;
        this.src = src;
        this.title = title;
    }
}