import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/test.model';
import { AppState } from './../app.state';
import * as TutorialActions from './../actions/test.actions';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
// Section 1
 tutorials: Observable<Tutorial[]>;

// Section 2
 constructor(private store: Store<AppState>) {
   this.tutorials = store.select('tutorial');

  }
  deleteItem = (index) => {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) );
  }
  ngOnInit() {
  }

}
