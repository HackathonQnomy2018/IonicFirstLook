import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { HomePageLayerModule } from '../../app/pages/home-page-layer/home-page-layer.module';
import { QfNavbarModule } from '../../app/layout/qf-navbar/qf-navbar.module';

@NgModule({
  imports: [
    IonicPageModule.forChild(HomePage),
    HomePageLayerModule,
    QfNavbarModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
