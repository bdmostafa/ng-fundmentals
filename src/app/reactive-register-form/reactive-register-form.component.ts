import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenPassValidator, matchPasswordValidator } from '../validators/password.validator';
import { validateUserName } from '../validators/user-name.validator';

@Component({
  selector: 'app-reactive-register-form',
  templateUrl: './reactive-register-form.component.html',
  styleUrls: ['./reactive-register-form.component.css']
})
export class ReactiveRegisterFormComponent implements OnInit {
  submitted = false;
  genderList = ["Male", "Female", "Others"];

  // registerForm = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   userName: new FormControl(''),
  //   phone: new FormControl(''),
  //   gender: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  // });

  registerForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get userName() {
    return this.registerForm.get('userName');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get gender() {
    return this.registerForm.get('gender');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get addSkills() {
    return this.registerForm.get('addSkills') as FormArray;
  }

  handleSkills() {
    this.addSkills.push(this.fb.control(''));
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, validateUserName]],
      phone: [''],
      subscribe: [false],
      gender: ['', [Validators.required,]],
      password: [
        '',
        [
          Validators.required,
          forbiddenPassValidator(/^password$/i),
          Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")
          // patternValidator
        ]
      ],
      confirmPassword: ['', [Validators.required]],
      addSkills: this.fb.array([])
    }, { validator: matchPasswordValidator });

    this.registerForm.get('subscribe')
      .valueChanges
      .subscribe(value => {
        const phone = this.registerForm.get('phone');
        if(value) {
          phone.setValidators([Validators.required, Validators.pattern("^[0-9]{10}$")])
        } else {
          phone.clearValidators();
        }
        phone.updateValueAndValidity();
      })
  }

  onSubmit() {
    this.submitted = true;
    alert('Form Submitted successfully!!!\n Check the values in browser console.');
    console.table(this.registerForm.value);
  }

}
