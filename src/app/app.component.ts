import { Component, ViewChild } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // access the child as a variable
  @ViewChild(CounterComponent)
  counterComponent: CounterComponent;

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
