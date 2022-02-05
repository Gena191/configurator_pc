import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ConfiguratorPageSmartComponent} from "./configurator-page-smart.component";
import {ConfiguratorPageComponent} from "./configurator-page.component";

@NgModule({
  declarations: [
    ConfiguratorPageComponent,
    ConfiguratorPageSmartComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,



  ],
  exports: [ConfiguratorPageSmartComponent],
  entryComponents: [ConfiguratorPageSmartComponent],
  bootstrap: [ConfiguratorPageSmartComponent],
  providers: []
})
export class configuratorPageModule {
}
