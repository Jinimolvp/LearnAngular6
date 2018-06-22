import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private fruitsArray = new BehaviorSubject<any>(['Banana', 'Orange']);
  fruit = this.fruitsArray.asObservable();
  constructor() { }
  changeGoal(fruit) {
    this.fruitsArray.next(fruit);
  }
  registerUser (userData) {
     console.log('inside service');
     console.log( userData);
    // return Observable.from(userData);

  }
}

