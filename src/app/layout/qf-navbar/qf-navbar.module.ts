import { NgModule } from '@angular/core';
import { QfNavbarComponent } from './qf-navbar.component';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [IonicModule],
  declarations: [QfNavbarComponent],
  exports: [QfNavbarComponent]
})
export class QfNavbarModule {}
