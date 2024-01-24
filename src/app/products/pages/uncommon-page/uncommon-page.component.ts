import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``,
})
export class UncommonPageComponent {
  name = 'Jose';
  gender: 'male' | 'female' = 'male';
  invitationMap: Record<typeof this.gender, string> = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  clients = [
    'María',
    'Pedro',
    'Fernando',
    'Heraldo',
    'Hugo',
    'Lucas',
    'Ronaldo',
    'Lionel',
  ];
  clientsMap = {
    '=0': 'no hay clientes.',
    '=1': 'tenemos # cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };
  person = {
    name: 'Jose',
    location: 'Venezuela',
    age: 20,
  };
  myObservableTimer = interval(1000);
  promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      console.log('Promesa resuelta');
      return resolve('Promesa resuelta');
    }, 2000);
  });

  changeClient() {
    this.name = 'Candela';
    this.gender = 'female';
  }

  deleteClient() {
    this.clients.pop();
  }
}
