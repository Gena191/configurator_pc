import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFound404Component} from "../../../pages/not-found-404/not-found404.component";
import {HomePageSmartComponent} from "../../../pages/home-page/home-page-smart.component";


const routes: Routes = [
  {path: 'home-page', component: HomePageSmartComponent},
  {path: 'all-configurations-page', component: NotFound404Component},
  {path: 'configurator-page', component: NotFound404Component },
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: '404', component: NotFound404Component},
  {path: '**', redirectTo: '/404'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class selectMenuRoutingModule {
}
