import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MenuItemComponent} from "./menu-item.component";


@NgModule({
  declarations: [
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [MenuItemComponent],
  entryComponents: [],
  bootstrap: [],
  providers: []
})
export class MenuItemModule {
}
