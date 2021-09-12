import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErpComponent } from './erp.component';

const routes: Routes = [{ path: '', component: ErpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErpRoutingModule { }
