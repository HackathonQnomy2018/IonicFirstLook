import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";
import { HomeLayerModule } from "../../app/pages-layer/home-layer/home-layer.module";

@NgModule({
  imports: [IonicPageModule.forChild(HomePage), HomeLayerModule],
  declarations: [HomePage],
  exports: [HomePage]
})
export class HomePageModule {}
