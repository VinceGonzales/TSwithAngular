import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
	// Decorated comment
	@Input()
	comment;

	constructor() { }
	ngOnInit() {
  }

}
