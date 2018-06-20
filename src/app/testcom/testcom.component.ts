import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Tutorial } from './../models/test.model';
import * as TutorialActions from './../actions/test.actions';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-testcom',
  templateUrl: './testcom.component.html',
  styleUrls: ['./testcom.component.scss']
})
export class TestcomComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}) );
  }
  ngOnInit() {
  }

}
