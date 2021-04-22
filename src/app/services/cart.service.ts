import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor() { }
  getCart() {
    return ["cart1", "cart2", "cart3"];
  }
}
