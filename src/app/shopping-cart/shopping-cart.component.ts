import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  title = "List of carts";
  carts;

  constructor(cart: CartService) { 
    // let cart = new CartService();
    this.carts = cart.getCart();
  }

  ngOnInit(): void {
  }

}
