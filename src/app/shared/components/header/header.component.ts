import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  static nCarrito: number = 0;
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  getCont():number{
    return HeaderComponent.nCarrito;
  }

  getRoute(): string{
return this.route.url;
  }
}
