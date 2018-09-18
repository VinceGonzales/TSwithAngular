import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appUiButton]'
})
export class UiButtonDirective implements OnInit {
	constructor(private el: ElementRef, private renderer: Renderer2) {
		this.renderer.addClass(this.el.nativeElement, 'btn');
		this.renderer.addClass(this.el.nativeElement, 'btn-primary');
	}
	ngOnInit() { }
}
