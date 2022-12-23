import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { DefaultButtonComponent } from './components/base/default-button/default-button.component';

@NgModule({
  declarations: [
    NavbarComponent,
    DefaultButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
