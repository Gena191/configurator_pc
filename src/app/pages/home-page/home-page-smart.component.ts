import {Component} from '@angular/core';

@Component({
  selector: 'home-page-smart',
  template: `
    <home-page
      [menuItems]="menuItems$ "></home-page>
  `
  ,

})
export class HomePageSmartComponent {

  menuItems$: { id: number, url: string }[] = [
    {id: 0, url: '/home-page'},
    {id: 1, url: '/all-configurations-page'},
    {id: 2, url: '/configurator-page'}
  ]

}

