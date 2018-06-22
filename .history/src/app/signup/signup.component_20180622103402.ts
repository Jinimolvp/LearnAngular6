import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  model: any = {};

  // registerForm: FormGroup;
  submitted = false;
  registerText = 'Submit';
  editText = 'Update';
  editButton = 'Edit';
  deleteButton = 'Delete';
  mobilePattern: string;
  countries = ['India', 'Pakisthan', 'Srilanka', 'UAE', 'Brazil', 'Canada', 'China'];
  Hobbies = [{ 'name': 'Cricket', 'Selected': true },
  { 'name': 'Football', 'Selected': true },
  { 'name': 'Gardening', 'Selected': true },
  { 'name': 'Reading', 'Selected': true }];
  firstName: string;
  lastName: string;
  email: string;
  phonenumber: string;
  address: string;
  gender = 'female';
  registerUserList: any;
  selectedHobbyList: any;
  editMode = 'false';
  editIndex: number;
  selectedName = 'India';
  hobbyIndex: number;
  edithobbyIndex: number;
  checkbox = false;
  constructor() { }


  ngOnInit() {
    // this.gender = 'female';
    //   this.registerForm = this.formBuilder.group({

    //   });
    //   this.registerForm = this.formBuilder.group({
    //     firstName: ['', Validators.required],
    //     lastName: ['', Validators.required],
    //     email: ['', [Validators.required, Validators.email]],
    //     password: ['', [Validators.required, Validators.minLength(6)]]
    // });
    this.registerUserList = [];
    // this.edithobbyIndex = -1;
    this.selectedHobbyList = ['Cricket', 'Football', 'Gardening', 'Reading'];

  }
  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }
  selectHobby = (hobby, selected, index) => {
    if (selected === true) {
      this.selectedHobbyList.push(hobby);
      this.selectedHobbyList = _.uniq(this.selectedHobbyList);
    } else {
      this.hobbyIndex = _.findIndex(this.selectedHobbyList, function (o) { return o === hobby; });
      if (this.hobbyIndex >= 0) {
        this.selectedHobbyList.splice(this.hobbyIndex, 1);
      }

      // this.selectedHobbyList.splice(index, 1);
    }
    console.log(this.selectedHobbyList);
    // console.log( $( 'input[@id=' + hobby + ']:checked').length );
  }
  registerMe = (ngForm: any) => {
    console.log(ngForm);
    this.submitted = true;
    if (ngForm.invalid) {
      return;
    }
    if (ngForm.valid) {
      this.registerUserList.push({
        'firstname': this.firstName,
        'lastname': this.lastName,
        'email': this.email,
        'gender': this.gender,
        'phonenumber': this.phonenumber,
        'country': this.selectedName,
        'address': this.address,
        'hobbies': this.selectedHobbyList
      });
      ngForm.resetForm();
      // ngForm.reset();
      // this.firstName = '';
      // this.lastName = '';
      // this.email = '';
      // this.gender = 'female';
      // this.phonenumber = '';
      // this.address = '';
      // this.selectedName = 'India';
      this.Hobbies = [{ 'name': 'Cricket', 'Selected': true },
      { 'name': 'Football', 'Selected': true },
      { 'name': 'Gardening', 'Selected': true },
      { 'name': 'Reading', 'Selected': true }];
    }
  }
  editUserDetails = (i) => {
    this.Hobbies.map((value, index) => {
      console.log(this.selectedHobbyList[index]);
      console.log(this.selectedHobbyList, 'ffff', value.name, 'mmm', index);
      this.edithobbyIndex = _.findIndex(this.selectedHobbyList, function (o) { return o === value.name; });
      if (this.edithobbyIndex < 0) {
        this.Hobbies[index].Selected = false;
      }
    });
    console.log(this.Hobbies);
    this.firstName = this.registerUserList[i]['firstname'];
    this.lastName = this.registerUserList[i]['lastname'];
    this.email = this.registerUserList[i]['email'];
    this.gender = this.registerUserList[i]['gender'];
    this.phonenumber = this.registerUserList[i]['phonenumber'];
    this.address = this.registerUserList[i]['address'];
    this.selectedName = this.registerUserList[i]['country'];
    this.editMode = 'true';
    this.editIndex = i;
    this.Hobbies = this.Hobbies;
  }
  updateUser = (regform) => {
    this.registerUserList[this.editIndex]['firstname'] = this.firstName;
    this.registerUserList[this.editIndex]['lastName'] = this.lastName;
    this.registerUserList[this.editIndex]['email'] = this.email;
    this.registerUserList[this.editIndex]['gender'] = this.gender;
    this.registerUserList[this.editIndex]['phonenumber'] = this.phonenumber;
    this.registerUserList[this.editIndex]['country'] = this.selectedName;
    this.registerUserList[this.editIndex]['address'] = this.address;

    // regform.resetForm();
    // To clear text fields
    // this.firstName = '';
    // this.lastName = '';
    // this.email = '';
    this.gender = 'female';
    // this.phonenumber = '';
    this.selectedName = 'India';
    // this.address = '';

  }
  deleteUserDetails = (i) => {
    this.registerUserList.splice(i, 1);
  }
  checkboxStatus() {
    return this.checkbox;
  }
}
