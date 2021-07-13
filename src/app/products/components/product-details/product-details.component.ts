import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  constructor(private route: ActivatedRoute, private produtsService: ProductsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      console.log(this.product);
    }) //Escuchamos los cambios de los parametros
  }

  fetchProduct(id: string){
    this.produtsService.getProduct(id).subscribe(product => {
      this.product = product;
    })
  }

}
