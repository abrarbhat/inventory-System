import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-inventory-root',
  // tslint:disable-next-line:whitespace
  templateUrl: './inventory-root.component.html',
  styleUrls: ['./inventory-root.component.css']
})
export class InventoryRootComponent implements OnInit {

  products: Product[];

  constructor() {
    this.products = [
       new Product(
       'MYSHOES',
       'Black Running Shoes',
       '/assets/images/products/black-shoes.jpg',
       ['Men', 'Shoes', 'Running Shoes'],
       109.99),
       new Product(
       'NEATOJACKET',
       'Blue Jacket',
       '/assets/images/products/blue-jacket.jpg',
       ['Women', 'Apparel', 'Jackets & Vests'],
       238.99),
       new Product(
       'NICEHAT',
       'A Nice Black Hat',
       '/assets/images/products/black-hat.jpg',
       ['Men', 'Accessories', 'Hats'],
       29.99)
       ];
  }
  productWasSelected(product: Product): void {
    console.log('Product Clicked:', product);
   }


  ngOnInit() {
  }

}
