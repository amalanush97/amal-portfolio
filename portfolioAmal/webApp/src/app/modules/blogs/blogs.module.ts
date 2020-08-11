import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsHomeComponent } from './pages/blogs-home/blogs-home.component';
import { MatChipsModule } from '@angular/material/chips';
import { HomeHashtagsComponent } from './components/home-hashtags/home-hashtags.component';
import { LatestPostComponent } from './components/latest-post/latest-post.component';
import { TrendingNowComponent } from './components/trending-now/trending-now.component';
import { AvailableBlogsComponent } from './components/available-blogs/available-blogs.component';

@NgModule({
  declarations: [BlogsHomeComponent, HomeHashtagsComponent, LatestPostComponent, TrendingNowComponent, AvailableBlogsComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class BlogsModule { }
