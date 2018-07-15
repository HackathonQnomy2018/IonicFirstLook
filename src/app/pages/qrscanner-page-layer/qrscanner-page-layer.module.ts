import { NgModule } from '@angular/core';
import { QrscannerPageLayerComponent } from './qrscanner-page-layer.component';
import { IonicModule } from 'ionic-angular/umd';

@NgModule({
  imports: [IonicModule],
  declarations: [QrscannerPageLayerComponent],
  exports: [QrscannerPageLayerComponent]
})
export class QrscannerPageLayerModule {}
