import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import {appReducers} from "./store/app.reducer";
import {EffectsModule} from "@ngrx/effects";
import {selectMenuModule} from "./common/components/select-menu/select-menu.module";
import {selectMenuRoutingModule} from "./common/components/select-menu/select-menu-routing.module";
import {HomePageModule} from "./pages/home-page/home-page.module";


@NgModule({
    declarations: [
        AppComponent,


    ],
    imports: [
        selectMenuRoutingModule,
        HomePageModule,
        selectMenuModule,
        MatIconModule,
        BrowserModule,
        BrowserAnimationsModule,
        EffectsModule.forRoot(),
        StoreModule.forRoot(appReducers),
    ],
    providers: [],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
