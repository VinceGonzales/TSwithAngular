import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css']
})
export class FlightFormComponent implements OnInit {
	flightModel: Flight;
	constructor() {
		this.flightModel = new Flight('','','','',0,new Date(),0,0,new Date());
	}
	ngOnInit() { }
}
