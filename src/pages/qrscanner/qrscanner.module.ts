import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrScannerPage } from './qrscanner';
import { QrscannerPageLayerModule } from '../../app/pages/qrscanner-page-layer/qrscanner-page-layer.module';
import { QfNavbarModule } from '../../app/layout/qf-navbar/qf-navbar.module';

@NgModule({
  imports: [
    IonicPageModule.forChild(QrScannerPage),
    QrscannerPageLayerModule,
    QfNavbarModule
  ],
  declarations: [QrScannerPage],
  exports: [QrScannerPage]
})
export class QrScannerPageModule {}
