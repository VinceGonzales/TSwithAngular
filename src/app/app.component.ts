import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  comments = [
  { author: 'Jay Kay', content: 'TypeScript makes Angular awesome' },
  { author: 'William', content: 'Yeah, right!' },
  { author: 'Raphael', content: 'Got stuck passing data around'}
  ];

  onShowComment(comment) {
  	console.log(comment.content);
  }
}
