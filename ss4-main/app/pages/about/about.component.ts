import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  pro: any;
  Products: Array<any> = [
    { id: 1, name: 'Túi xách chính hãng 1', img: 'https://cf.shopee.vn/file/29f9d5736dd676601a4c41be4155b4b5', price: 1500, sale_price: 1000 },
    { id: 2, name: 'Túi xách chính hãng 2', img: 'https://cf.shopee.vn/file/29f9d5736dd676601a4c41be4155b4b5', price: 1800, sale_price: 1200 },
    { id: 3, name: 'Túi xách chính hãng 3', img: 'https://cf.shopee.vn/file/29f9d5736dd676601a4c41be4155b4b5', price: 2000, sale_price: 0 },
  ]
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id'];
    // console.log(id);
    console.log(this.Products.find(function (element) {
      return id = element.id;
    }))
    this.pro = { id: 2, name: 'Túi xách chính hãng 2', img: 'https://cf.shopee.vn/file/29f9d5736dd676601a4c41be4155b4b5', price: 1800, sale_price: 1200 }
  }

}
