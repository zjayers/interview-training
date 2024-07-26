import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { WikiService } from './wiki.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  count$: Observable<number>;

  constructor(
    private wikiService: WikiService,
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
  }

  content = 'Hey';
  posts = [
    {
      title: 'Title1',
      subtitle: 'Sub1',
      content: 'Howdy1',
    },
    {
      title: 'Title2',
      subtitle: 'Sub2',
      content: 'Howdy2',
    },
    {
      title: 'Title3',
      subtitle: 'Sub3',
      content: 'Howdy3',
    },
  ];

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  onSearch() {
    this.content = this.wikiService.search('test');
  }
}
