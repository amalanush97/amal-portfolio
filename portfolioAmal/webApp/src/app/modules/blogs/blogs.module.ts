import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsHomeComponent } from './pages/blogs-home/blogs-home.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [BlogsHomeComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class BlogsModule { }
