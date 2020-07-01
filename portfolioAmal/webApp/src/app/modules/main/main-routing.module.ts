import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component"
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'',
        component:LandingPageComponent
      },
      {
        path:'blogs',
        loadChildren:() => import('../blogs/blogs.module').then( m => m.BlogsModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
