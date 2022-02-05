import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @Input()
  menuItems!: { id: number, url: string }[] | null ;

  constructor() { }

  ngOnInit(): void {
  }

}
