import { AbstractControl } from "@angular/forms";

export function validateUserName(control: AbstractControl): {[key: string]: any} | null {
    const userList = ['Mostafa', 'admin', 'user', 'superuser'];
    const userNameNotAvailable = (userList.indexOf(control.value) > -1);
    // const userNameNotAvailable = userList.map(user => /`${user}`/.test(control.value))
    return userNameNotAvailable ? {'userNameNotAvailable': {value: control.value}} : null;
}