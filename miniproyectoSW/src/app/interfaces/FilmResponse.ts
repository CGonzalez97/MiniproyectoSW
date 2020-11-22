import { Film } from './Film';

export interface FilmResponse {
    count: number;
    next?: any;
    previous?: any;
    results: Film[];
}