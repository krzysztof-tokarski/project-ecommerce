import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

const PRIMENG_MODULES = [
  InputTextareaModule,
  InputTextModule,
  InputNumberModule,
  FileUploadModule,
  PasswordModule,
  MenubarModule,
  ButtonModule,
  CardModule,
];
// TODO transfer form-associated imports to sep module

@NgModule({
  declarations: [LogoComponent, FileUploadComponent],
  imports: [CommonModule, PRIMENG_MODULES],
  exports: [LogoComponent, FileUploadComponent, PRIMENG_MODULES],
})
export class SharedModule {}
