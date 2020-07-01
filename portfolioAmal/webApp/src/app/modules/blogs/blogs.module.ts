import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsHomeComponent } from './pages/blogs-home/blogs-home.component';


@NgModule({
  declarations: [BlogsHomeComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
