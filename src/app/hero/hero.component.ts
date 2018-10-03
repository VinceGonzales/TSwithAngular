import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
	pageTitle: string = "Fortnite Heroes";
	heroes:Hero[];
	constructor(private heroService:HeroService) {}
	ngOnInit() {
		this.heroes = [];
		this.heroService.getAllHero().subscribe(heroes => {
			this.heroes = <Hero[]>heroes;
		});
	}
}
