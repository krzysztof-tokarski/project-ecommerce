import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';

const PRIMENG_MODULES = [
  InputTextModule,
  PasswordModule,
  MenubarModule,
  ButtonModule,
  CardModule,
];

@NgModule({
  declarations: [LogoComponent],
  imports: [CommonModule, PRIMENG_MODULES],
  exports: [LogoComponent, PRIMENG_MODULES],
})
export class SharedModule {}
