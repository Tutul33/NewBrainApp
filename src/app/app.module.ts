import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberTransformPipe } from './shared/customPipe/number-transform.pipe';
import { SidebarModule } from './shared/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent,
    NumberTransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
