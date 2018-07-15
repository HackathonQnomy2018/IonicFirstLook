import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrScannerPage } from './qrscanner';

@NgModule({
  declarations: [QrScannerPage],
  imports: [IonicPageModule.forChild(QrScannerPage)]
})
export class QrScannerPageModule {}
