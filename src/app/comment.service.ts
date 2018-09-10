import { Injectable } from '@angular/core';

@Injectable()
export class CommentService {
	private comments: Array<any> = [
	{
		author: 'solomon',
		content: 'TypeScript + Angular is amazing'
	},
	{
		author: 'lorna',
		content: 'TypeScript is really awesome'
	},
	{
		author: 'codebeast',
		content: 'I am new to TypeScript'
	}
	];
	constructor() { }
	getComments() {
		return this.comments;
	}
	removeComment(removableComment) {
		// find the index of the comment
		const index = this.comments.findIndex(c => c.author === removableComment.author);
		// remove the comment from the array
		this.comments.splice(index, 1);
		// return the new array
		return this.comments;
	}
}
