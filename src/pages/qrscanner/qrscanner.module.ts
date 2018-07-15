import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrScannerPage } from './qrscanner';
import { QrscannerPageLayerModule } from '../../app/pages/qrscanner-page-layer/qrscanner-page-layer.module';
import { LayoutModule } from '../../app/layout/layout.module';

@NgModule({
  imports: [
    IonicPageModule.forChild(QrScannerPage),
    LayoutModule,
    QrscannerPageLayerModule
  ],
  declarations: [QrScannerPage]
})
export class QrScannerPageModule {}
