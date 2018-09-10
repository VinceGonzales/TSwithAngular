import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
	comments: Array<any>;

	constructor() { }
	ngOnInit() {
		this.comments = [
			{ author: 'solomon', content: 'TypeScript + Angular is amazing' },
			{ author: 'lorna', content: 'TypeScript is really awesome'},
			{ author: 'codebeast', content: 'I am new to TypeScript'}
		];
	}
}
