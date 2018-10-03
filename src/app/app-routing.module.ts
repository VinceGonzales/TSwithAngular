import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { SchematicComponent } from './schematic/schematic.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'heroes', component: HeroComponent },
	{ path: 'schematics', component: SchematicComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
