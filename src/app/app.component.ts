import { Component } from '@angular/core';

export type FormType = 'TDF' | 'reactiveForm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-app';
  // name = 'Mostafa';
  // message = '';
  // isLogin = false;
  // isLogout = true;

  form: FormType = 'TDF';

  // items = ['item1', 'item2', 'item3'];

  // addItem(newItem: string) {
  //   this.items.push(newItem);
  // }

  // loginChange() { 
  //   // console.log(this.isLogin, this.isLogout)
  //   this.isLogin = !this.isLogin;
  //   this.isLogout = !this.isLogout; 
  // }

  get showTDF() {
    return this.form === 'TDF';
  }

  get showReactiveForm() {
    return this.form === 'reactiveForm';
  }

  toggleFormType(type: FormType) {
    this.form = type;
  }
  
}
