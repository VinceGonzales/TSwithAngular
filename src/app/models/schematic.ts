import { Trait } from './trait';

export class Schematic {
	imgurl: string;
	name: string;
	level: string;
	stars: number;
	description: string;
	stat: Array<Trait>;
}