import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    // Used to allow other modules to import components defined in this module
    HeaderComponent // Components declared
  ],
  exports: [HeaderComponent],
  imports: [CommonModule, MatToolbarModule]
})
export class HeaderModule {}
