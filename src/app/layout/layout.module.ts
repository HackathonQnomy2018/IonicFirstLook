import { NgModule } from '@angular/core';
import { QfNavbarModule } from './qf-navbar/qf-navbar.module';

@NgModule({
  imports: [QfNavbarModule],
  exports: [QfNavbarModule]
})
export class LayoutModule {}
