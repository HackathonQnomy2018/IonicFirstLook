import { NgModule } from '@angular/core';
import { QrscannerPageLayerComponent } from './qrscanner-page-layer.component';
import { IonicModule } from 'ionic-angular';
import { QRScanner } from '@ionic-native/qr-scanner';
@NgModule({
  imports: [IonicModule],
  declarations: [QrscannerPageLayerComponent],
  exports: [QrscannerPageLayerComponent],
  providers: [QRScanner]
})
export class QrscannerPageLayerModule {}
