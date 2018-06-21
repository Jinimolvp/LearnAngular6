import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  // template:'<p>This is the home page</p>',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]


})

export class HomeComponent implements OnInit {
  // itemCount:number;
  // btnText:string = "Add fruits";
  // inputText:string = "Mango";
  // fruitsArray = [];

  goals = ['This a sample project to learn Angular 6 ',
  'The 6.0.0 release of Angular is here! This is a major  release focused less on the underlying framework',
  'and more on the toolchain and on making it easier to move quickly with Angular in the future'];

  // constructor(private _data:DataService) { }
  constructor() {}

  ngOnInit() {

        // this._data.fruit.subscribe(res => this.fruitsArray=res);
    // this._data.changeGoal(this.fruitsArray);
    // this.itemCount = this.fruitsArray.length;

  }
  // addFruits = () => {
  //   if(this.inputText == '') {
  //     alert("Please add a fruit");
  //     return false;
  //   }
  //   this.fruitsArray.push(this.inputText);
  //   this.inputText='';
  //   this.itemCount=this.fruitsArray.length;
  //   this._data.changeGoal(this.fruitsArray);
  // }
  // removeItem = (index) => {
  //   this.fruitsArray.splice(index,1);
  //   this._data.changeGoal(this.fruitsArray);
  //   this.itemCount=this.fruitsArray.length;
  // }

}
