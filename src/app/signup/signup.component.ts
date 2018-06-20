import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerText: string = 'Submit';
  editText: string = 'Update';
  editButton: string = 'Edit';
  deleteButton: string = 'Delete';
  Hobbies = [{'name': 'Cricket', 'Selected': false},
  {'name': 'Football', 'Selected': true},
  {'name': 'Gardening', 'Selected': false},
  {'name': 'Reading', 'Selected': false}];
  firstName: string;
  lastName: string;
  email: string;
  phonenumber: string;
  address: string;
  gender: string = 'female';
  registerUserList: any;
  editMode: string = 'false';
  editIndex: number;

  constructor() { }

  ngOnInit() {
    this.registerUserList = [];
  }
  // getHobbies = (hobbyname, checkedProp) => {
  //   console.log(  # +'hobbyname'.checked);
  //   if (checkedProp === true) {
  //     console.log('ticked', hobbyname);
  //   } else {
  //     console.log('Untick', hobbyname);
  //   }
  // }
  registerMe = () => {
    this.registerUserList.push({'firstname': this.firstName,
                                'lastname': this.lastName,
                                'email': this.email,
                                'gender' : this.gender,
                                'phonenumber': this.phonenumber,
                                'address': this.address
                              });
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.gender = 'female';
    this.phonenumber = '';
    this.address = '';
    console.log( this.registerUserList);
  }
  editUserDetails = (i) => {
    this.firstName = this.registerUserList[i]['firstname'];
    this.lastName = this.registerUserList[i]['lastname'];
    this.email = this.registerUserList[i]['email'];
    this.gender = this.registerUserList[i]['gender'];
    this.phonenumber = this.registerUserList[i]['phonenumber'];
    this.address = this.registerUserList[i]['address'];
    this.editMode = 'true';
    this.editIndex = i;


  }
  updateUser = () => {
    this.registerUserList[this.editIndex]['firstname'] = this.firstName ;
    this.registerUserList[this.editIndex]['lastName'] = this.lastName ;
    this.registerUserList[this.editIndex]['email'] = this.email ;
    this.registerUserList[this.editIndex]['phonenumber'] = this.phonenumber ;
    this.registerUserList[this.editIndex]['address'] = this.address ;
    // To clear text fields
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.gender = 'female';
    this.phonenumber = '';
    this.address = '';

  }
  deleteUserDetails = (i) => {
    this.registerUserList.splice(i, 1);
  }
}
