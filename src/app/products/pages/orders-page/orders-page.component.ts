import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-orders',
  templateUrl: './orders-page.component.html',
  styles: ``,
})
export class OrdersPageComponent {
  isUpperCase = false;
  heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Spiderman', canFly: false, color: Color.red },
    { name: 'Deadpool', canFly: false, color: Color.red },
    { name: 'Batman', canFly: false, color: Color.black },
    { name: 'Green Lantern', canFly: true, color: Color.green },
  ];
  sortBy?: keyof Hero;

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }

  changeSortBy(key?: keyof Hero) {
    this.sortBy = key;
  }
}
