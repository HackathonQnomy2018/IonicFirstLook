import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthPage } from './auth';

@NgModule({
  imports: [IonicPageModule.forChild(AuthPage)],
  declarations: [AuthPage]
})
export class AuthPageModule {}
