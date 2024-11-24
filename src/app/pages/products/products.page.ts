import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {
  products = [
    {
      id: 168,
      title: 'Charger SXT RWD',
      price: 32999.99,
      discountPercentage: 13.39,
      thumbnail:
        'https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png',
    },
    {
      id: 78,
      title: 'Apple MacBook Pro 14 Inch Space Grey',
      price: 1999.99,
      discountPercentage: 18.52,
      thumbnail:
        'https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png',
    },
  ];

  constructor() {}

  // Placeholder for "Add to Cart" action
  addToCart(product: any) {
    console.log('Add to Cart:', product);
  }
}
