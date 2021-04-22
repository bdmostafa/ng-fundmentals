import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModal = new User();
  submitted = false;
  genderList = ["Male", "Female", "Others"];
  genderHasError = true;

  constructor() { }

  onSubmit() {
    this.submitted = true;
    alert('Form Submitted successfully!!!\n Check the values in browser console.');
    console.table(this.userModal);
  }

  ngOnInit(): void {
  }

  validateGender(value) {
    if (value === 'default') {
      this.genderHasError = true;
    } else {
      this.genderHasError = false;
    }
  }

}
