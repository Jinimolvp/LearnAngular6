import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Tutorial } from './../models/test.model';
import * as TutorialActions from './../actions/test.actions';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-testcom',
  templateUrl: './testcom.component.html',
  styleUrls: ['./testcom.component.scss']
})
export class TestcomComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  firstName: string;
  lastName: string;
  constructor(private store: Store<AppState>,private formBuilder: FormBuilder) { }
  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}) );
  }
  // convenience getter for easy access to form fields
      get f() { return this.registerForm.controls; }
  registerMe = () => {
      this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({

    });
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
  });
  }

}
