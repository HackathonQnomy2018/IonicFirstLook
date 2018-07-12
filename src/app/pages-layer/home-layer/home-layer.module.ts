import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeLayerComponent } from "./home-layer.component";
import { IonicModule } from "ionic-angular";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [HomeLayerComponent],
  exports: [HomeLayerComponent]
})
export class HomeLayerModule {}
