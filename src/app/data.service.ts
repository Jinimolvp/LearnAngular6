import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

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
}

