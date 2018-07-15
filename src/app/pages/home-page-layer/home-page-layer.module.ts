import { NgModule } from '@angular/core';
import { HomePageLayerComponent } from './home-page-layer.component';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [IonicModule],
  declarations: [HomePageLayerComponent],
  exports: [HomePageLayerComponent]
})
export class HomePageLayerModule {}
