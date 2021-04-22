import { IProduct } from './../Interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: IProduct[];
  public toggle = true;

  constructor(products: ProductsService) {
    this.products = products.getProducts();
   }

  //  get handleFavorite() { return this.toggle = !this.toggle; }
  handleFavorite(value: any) {
    // console.log(value)
    this.products.map(product => {
      if (value.prodId === product.id) {
        product.favorite = !product.favorite;
      }
    })
  }

  ngOnInit(): void {
  }

}
