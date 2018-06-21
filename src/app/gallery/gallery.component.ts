import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  itemCount: number;
  btnText:string = 'Add fruits';
  inputText:string = 'Mango';
  fruitsArray = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.fruit.subscribe(res => this.fruitsArray=res);
    this._data.changeGoal(this.fruitsArray);
    this.itemCount = this.fruitsArray.length;

  }
  addFruits = () => {
    if ( this.inputText === '') {
      alert('Please add a fruit');
      return false;
    }
    this.fruitsArray.push(this.inputText);
    this.inputText = '';
    this.itemCount = this.fruitsArray.length;
    this._data.changeGoal(this.fruitsArray);
  }
  removeItem = (index) => {
    this.fruitsArray.splice(index,1);
    this._data.changeGoal(this.fruitsArray);
    this.itemCount = this.fruitsArray.length;
  }

}
