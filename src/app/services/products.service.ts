import { IProduct } from './../Interfaces/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts():IProduct[] {
    return [
      {
        id: 1,
        name: "Shirt",
        img: "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg",
        price: 25.95345,
        quantity: 9,
        rating: 4.75,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        expireDate: new Date(2020, 12, 31),
        favorite: true
      },
      {
        id: 2,
        name: "Pant",
        img: "https://rookiesjeans.com/wp-content/uploads/2020/08/RJCP101-LT-KHAKI-4_1.jpg",
        price: 29.95,
        quantity: 3,
        rating: 3.75,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
        expireDate: new Date(2020, 12, 31),
        favorite: false
      },
      {
        id: 3,
        name: "Sharee",
        img: "https://amarzaan.com/wp-content/uploads/2020/09/4-2.webp",
        price: 35.75,
        quantity: 7,
        rating: 4.95,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised",
        expireDate: new Date(2020, 12, 31),
        favorite: false
      },
    ];
  }
}
