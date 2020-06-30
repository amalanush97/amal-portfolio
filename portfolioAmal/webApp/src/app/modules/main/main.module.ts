import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

//components
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

//modules
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './componenets/header/header.component';

@NgModule({
  declarations: [LandingPageComponent, HeaderComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule
  ]
})
export class MainModule { }
