import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErpComponent } from './erp.component';
//import { SidebarModule } from '../shared/sidebar/sidebar.module';
//import { TopbarModule } from '../shared/topbar/topbar.module';

const routes: Routes = [{ path: '', component: ErpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],//,SidebarModule],//,TopbarModule],
  exports: [RouterModule]
})
export class ErpRoutingModule { }
