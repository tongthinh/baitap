import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Array<any> = [
    { id: 1, name: 'Quần áo nam' },
    { id: 2, name: 'Túi xách nữ' },
    { id: 1, name: 'Giày dép đẹp' },
    { id: 3, name: 'Đồng hồ kỹ thuật số' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
