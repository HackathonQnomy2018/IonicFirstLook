import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page.component";
import { IonicModule } from "ionic-angular";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent]
})
export class HomePageModule {}
