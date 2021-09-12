import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErpRoutingModule } from './erp-routing.module';
import { ErpComponent } from './erp.component';
import { SidebarModule } from '../shared/sidebar/sidebar.module';
import { TopbarModule } from '../shared/topbar/topbar.module';

@NgModule({
  declarations: [ErpComponent],
  imports: [
    CommonModule,
    ErpRoutingModule,
    SidebarModule
    ,
    TopbarModule
  ]
})
export class ErpModule { }
