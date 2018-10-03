import { Component, OnInit } from '@angular/core';
import { SchematicService } from '../schematic.service';
import { Schematic } from '../models/schematic';

@Component({
  selector: 'app-schematic',
  templateUrl: './schematic.component.html',
  styleUrls: ['./schematic.component.css']
})
export class SchematicComponent implements OnInit {
	pageTitle: string = "Fortnite Schematics";
	schematics:Schematic[];
	constructor(private schematicService:SchematicService) {}
	ngOnInit() {
		this.schematics = [];
		this.schematicService.getAllSchematics().subscribe(schems => {
			this.schematics = <Schematic[]>schems;
		});
	}
}
