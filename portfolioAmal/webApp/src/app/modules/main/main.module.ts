import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

//components
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

//modules
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './componenets/header/header.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [LandingPageComponent, HeaderComponent, MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule
  ]
})
export class MainModule { }
