import { IProduct } from './../Interfaces/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() public product:IProduct;
  @Output() public favoriteEvent = new EventEmitter();

  constructor() { }

  handleFavorite(prodId) {
    // console.log(prodId, this.product)
    this.favoriteEvent.emit({
      prodId: prodId
    })
  }

  ngOnInit(): void {
  }

}
