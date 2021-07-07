import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product = {
    id: "",
    image: "",
    title: "",
    price: 0,
    description: "",
  };
  @Output() productClicked: EventEmitter<any> = new EventEmitter(); //any, number ...

  today = new Date();
  
  addCart(){
    console.log(`${this.product.title} agregado al carrito`);
    this.productClicked.emit(this.product.id)
  }
}