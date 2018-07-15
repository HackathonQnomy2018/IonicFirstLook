import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageLayerComponent } from "./home-page-layer.component";
import { IonicModule } from "ionic-angular";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [HomePageLayerComponent],
  exports: [HomePageLayerComponent]
})
export class HomePageLayerModule {}
