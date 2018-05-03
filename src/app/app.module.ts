import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Topnavbar} from "./components/topnavbar/topnavbar.component";
import {Navigation} from "./components/navigation/navigation.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {HomeComponent} from "./pages/home/home.component";
import {MarketComponent} from "./pages/market/market.component";
import {PJMComponent} from "./pages/pjm/pjm.component";
import {MicrogridComponent} from "./pages/microgrid/microgrid.component";
import {ResourcedetailsComponent} from "./pages/resourcedetails/resourcedetails.component";
import {StudycasecontrolComponent} from "./pages/studycasecontrol/studycasecontrol.component";

@NgModule({
  declarations: [
    AppComponent,
    Navigation,
    Topnavbar,
    HomeComponent,
    MarketComponent,
    PJMComponent,
    MicrogridComponent,
    ResourcedetailsComponent,
    StudycasecontrolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
