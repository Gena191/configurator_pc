import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'select-menu',
  templateUrl: './select-menu.component.html',
  styleUrls: ['./select-menu.component.scss']
})
export class SelectMenuComponent {

  menuItems: { id: number, url: string, iconName: string, isSelected: boolean }[] = [
    {id: 0, url: '/home-page', iconName: 'home', isSelected: true},
    {id: 1, url: '/all-configurations-page', iconName: 'language', isSelected: false},
    {id: 2, url: '/configurator-page', iconName: 'memory', isSelected: false}
  ]


  isSelectedMenu(url: string): void {

    this.menuItems.map((item) => {
      item.isSelected = url === item.url;
    })

  }
}
