import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Products: Array<any> = [
    { id: 1, name: 'Túi xách chính hãng 1', img: 'https://cf.shopee.vn/file/29f9d5736dd676601a4c41be4155b4b5', price: 1500, sale_price: 1000 },
    { id: 2, name: 'Túi xách chính hãng 2', img: 'https://cf.shopee.vn/file/29f9d5736dd676601a4c41be4155b4b5', price: 1800, sale_price: 1200 },
    { id: 3, name: 'Túi xách chính hãng 3', img: 'https://cf.shopee.vn/file/29f9d5736dd676601a4c41be4155b4b5', price: 2000, sale_price: 0 },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
