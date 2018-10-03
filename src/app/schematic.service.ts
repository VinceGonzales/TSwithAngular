import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SchematicService {
	constructor(private http:HttpClient) { }

	getAllSchematics() {
		let apiUrl: string = "http://localhost:3000/api/schematics";
		return this.http.get(apiUrl);
	}
}
