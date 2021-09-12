import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErpRoutingModule } from './erp-routing.module';
import { ErpComponent } from './erp.component';
import { SidebarModule } from '../shared/sidebar/sidebar.module';

@NgModule({
  declarations: [ErpComponent],
  imports: [
    CommonModule,
    ErpRoutingModule,
    SidebarModule
  ]
})
export class ErpModule { }
