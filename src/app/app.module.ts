import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePageModule } from '../pages/home/home.module';

@NgModule({
  declarations: [MyApp, ListPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HomePageModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, ListPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
