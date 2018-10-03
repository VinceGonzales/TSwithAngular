import { OnInit, Component } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './models/hero';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor() {}
	ngOnInit() { }
}
