import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
	constructor(private http:HttpClient) { }

	getAllHero() {
		let apiUrl: string = "http://localhost:3000/api/heroes";
		return this.http.get(apiUrl);
	}
}
