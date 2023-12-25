// What makes a movie
// javascript model (but 실제로는 database model)

export class Movie {
    id: number;
    title: string;
    year: number;
    genres: string[];
}