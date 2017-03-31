import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DragulaModule} from 'ng2-dragula/components/dragular.module';

import { AppComponent } from './app.component';
import { PlaneTaxiTileComponent } from './plane-taxi-tile/plane-taxi-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaneTaxiTileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
