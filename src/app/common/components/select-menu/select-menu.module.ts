import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {SelectMenuComponent} from "./select-menu.component";
import {SelectMenuSmartComponent} from "./selected-menu-smart.component";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    SelectMenuComponent,
    SelectMenuSmartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule

  ],
  exports: [SelectMenuSmartComponent],
  entryComponents: [SelectMenuSmartComponent],
  bootstrap: [SelectMenuSmartComponent],
  providers: []
})
export class selectMenuModule {
}
