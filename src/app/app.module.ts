import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { SchematicService } from './schematic.service';
import { HeroComponent } from './hero/hero.component';
import { SchematicComponent } from './schematic/schematic.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		HeroComponent,
		SchematicComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [ HeroService, SchematicService ],
	bootstrap: [AppComponent]
})
export class AppModule { }
