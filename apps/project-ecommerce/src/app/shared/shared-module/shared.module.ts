import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { InputTextModule } from 'primeng/inputtext';

const MATERIAL_MODULES = [MatButtonModule, MatCardModule];
const PRIMENG_MODULES = [InputTextModule];

@NgModule({
  declarations: [LogoComponent],
  imports: [CommonModule, MATERIAL_MODULES, PRIMENG_MODULES],
  exports: [LogoComponent, MATERIAL_MODULES, PRIMENG_MODULES],
})
export class SharedModule {}
