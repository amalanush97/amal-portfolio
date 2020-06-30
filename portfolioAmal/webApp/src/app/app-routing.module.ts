import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainModule} from "./modules/main/main.module"

const routes: Routes = [
  {
  path:'',
  redirectTo:'/main',
  pathMatch:'full'
  },
  {
    path:'main',
    loadChildren: () => import("./modules/main/main.module").then(m => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
