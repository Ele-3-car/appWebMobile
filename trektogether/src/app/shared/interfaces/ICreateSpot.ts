export interface ICreateSpot {
    id: string;
    city: string;
    name: string;
    description: string;
    longitude: number;
    latitude: number;
    shortDescription: string;
    image: string;
    stars: number;
    visited: string[];
    toEat: string[];
    duration: number;

}