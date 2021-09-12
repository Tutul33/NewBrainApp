import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'erp', 
    loadChildren: () => import('./erp/erp.module').then(m => m.ErpModule) 
  },
     { path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
