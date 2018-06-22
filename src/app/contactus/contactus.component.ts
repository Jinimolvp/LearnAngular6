import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  fruitsArray:any;

  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.fruit.subscribe(res => this.fruitsArray = res);
  }

}
