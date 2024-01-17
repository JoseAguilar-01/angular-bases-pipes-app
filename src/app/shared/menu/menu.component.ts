import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``,
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon',
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        items: [
          {
            label: 'Otros pipes',
            icon: 'pi pi-cog',
          },
        ],
      },
    ];
  }
}
