import { NgModule } from '@angular/core';
import { BarcodescannerPageLayerComponent } from './barcodescanner-page-layer.component';
import { IonicModule } from 'ionic-angular';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  imports: [IonicModule, NgxQRCodeModule],
  declarations: [BarcodescannerPageLayerComponent],
  exports: [BarcodescannerPageLayerComponent],
  providers: [BarcodeScanner]
})
export class BarcodescannerPageLayerModule {}
