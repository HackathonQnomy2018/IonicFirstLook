import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QfButtonComponent } from './qf-button.component';
import { QfButtonDirective } from './qf-button.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [QfButtonComponent, QfButtonDirective]
})
export class QfButtonModule {}
