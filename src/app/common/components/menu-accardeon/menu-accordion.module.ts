import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MenuAccordionComponent} from "./menu-accordion.component";



@NgModule({
  declarations: [
    MenuAccordionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [MenuAccordionComponent],
  entryComponents: [],
  bootstrap: [],
  providers: []
})
export class MenuAccordionModule {
}
