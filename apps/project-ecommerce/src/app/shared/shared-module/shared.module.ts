import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const MATERIAL_MODULES = [MatButtonModule, MatCardModule];

@NgModule({
  declarations: [LogoComponent],
  imports: [CommonModule, MATERIAL_MODULES],
  exports: [LogoComponent, MATERIAL_MODULES],
})
export class SharedModule {}
