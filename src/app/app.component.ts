import { OnInit, Component } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	pageTitle: string = "Angular by Xolartek";
	heroes:Hero[];
	constructor(private heroService:HeroService) {}
	ngOnInit() {
		this.heroes = [];
		this.heroService.getAllHero().subscribe(heroes => {
			this.heroes = <Hero[]>heroes;
		});
	}
}
