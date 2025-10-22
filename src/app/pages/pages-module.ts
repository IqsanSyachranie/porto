import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PagesRoutingModule } from './pages-routing-module';
import { Home } from './home/home';


@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ButtonModule
  ],
  exports: [Home]
})
export class PagesModule { }
