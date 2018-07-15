import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QfNavbarComponent } from './qf-navbar.component';
import { IonicModule } from 'ionic-angular/umd';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [QfNavbarComponent],
  exports: [CommonModule, QfNavbarComponent]
})
export class QfNavbarModule {}
