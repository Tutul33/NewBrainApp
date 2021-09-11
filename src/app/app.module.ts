import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberTransformPipe } from './shared/customPipe/number-transform.pipe';
import { BiodataInfoComponent } from './biodata/biodata-info/biodata-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberTransformPipe,
    BiodataInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
