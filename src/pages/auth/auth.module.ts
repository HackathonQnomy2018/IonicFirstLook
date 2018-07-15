import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthPage } from './auth';
import { QfNavbarModule } from '../../app/layout/qf-navbar/qf-navbar.module';
import { AuthPageLayerModule } from '../../app/pages/auth-page-layer/auth-page-layer.module';

@NgModule({
  imports: [
    IonicPageModule.forChild(AuthPage),
    AuthPageLayerModule,
    QfNavbarModule
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {}
