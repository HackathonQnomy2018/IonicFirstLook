import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";
import { HomePageLayerModule } from "../../app/pages/home-page-layer/home-page-layer.module";

@NgModule({
  imports: [IonicPageModule.forChild(HomePage), HomePageLayerModule],
  declarations: [HomePage],
  exports: [HomePage]
})
export class HomePageModule {}
