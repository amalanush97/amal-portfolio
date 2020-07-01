import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogsHomeComponent} from "./pages/blogs-home/blogs-home.component"

const routes: Routes = [
  {
    path:'',
    component:BlogsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
