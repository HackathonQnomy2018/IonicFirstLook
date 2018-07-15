import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";
import { HomePageModule } from "../../app/pages/home-page/home-page.module";

@NgModule({
  imports: [IonicPageModule.forChild(HomePage), HomePageModule],
  declarations: [HomePage],
  exports: [HomePage]
})
export class HomePageModule {}
