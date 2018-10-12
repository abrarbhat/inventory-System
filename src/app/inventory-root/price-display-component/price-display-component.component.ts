import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-display-component',
  template: `
  <div class="price-display">\${{ price }}</div>
  `,
  styleUrls: ['./price-display-component.component.css']
})
export class PriceDisplayComponentComponent implements OnInit {
  @Input() price: number;
  constructor() { }

  ngOnInit() {
  }

}
