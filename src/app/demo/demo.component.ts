import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  title = 'store';

  items = ['cristian', 'nicolas', 'julian'];

  addItem() {
    this.items.push('nuevo Item')
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
  
  ngOnInit(): void {
  }

}
