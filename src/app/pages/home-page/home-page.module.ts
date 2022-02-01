import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HomePageComponent} from "./home-page.component";
import {HomePageSmartComponent} from "./home-page-smart.component";
import {MenuItemModule} from "../../common/components/menu-item/menu-item/menu-item.module";




@NgModule({
  declarations: [
    HomePageComponent,
    HomePageSmartComponent,



  ],
    imports: [
        CommonModule,
        RouterModule,
        MenuItemModule,


    ],
  exports: [HomePageSmartComponent],
  entryComponents: [HomePageSmartComponent],
  bootstrap: [HomePageSmartComponent],
  providers: []
})
export class HomePageModule {
}
