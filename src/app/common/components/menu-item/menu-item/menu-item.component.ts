import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input()
  menuItems!: { id: number, url: string }[] | null ;
  constructor() { }

  ngOnInit(): void {
  }

}
