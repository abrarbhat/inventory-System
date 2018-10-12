import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../../Product.model';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
@Input() product: Product;

public prod: Number ;
@HostBinding('attr.class') cssClass = 'item';

  constructor() { }

  ngOnInit() {
  }

  public helloFunction() {
  console.log('Hello');
  }

}
