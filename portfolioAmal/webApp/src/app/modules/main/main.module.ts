import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import {MatDialogModule} from '@angular/material/dialog';

//components
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

//modules
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './componenets/header/header.component';
import { MainComponent } from './main.component';
import { LoginComponent } from './componenets/login/login.component';

@NgModule({
  declarations: [LandingPageComponent, HeaderComponent, MainComponent, LoginComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatDialogModule
  ]
})
export class MainModule { }
