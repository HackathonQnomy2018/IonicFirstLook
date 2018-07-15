import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcodescannerPage } from './barcodescanner';
import { BarcodescannerPageLayerModule } from '../../app/pages/barcodescanner-page-layer/barcodescanner-page-layer.module';
import { QfNavbarModule } from '../../app/layout/qf-navbar/qf-navbar.module';

@NgModule({
  imports: [
    IonicPageModule.forChild(BarcodescannerPage),
    BarcodescannerPageLayerModule,
    QfNavbarModule
  ],
  declarations: [BarcodescannerPage]
})
export class BarcodescannerPageModule {}
