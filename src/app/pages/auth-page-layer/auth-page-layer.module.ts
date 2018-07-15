import { NgModule } from '@angular/core';
import { AuthPageLayerComponent } from './auth-page-layer.component';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [IonicModule],
  declarations: [AuthPageLayerComponent],
  exports: [AuthPageLayerComponent]
})
export class AuthPageLayerModule {}
