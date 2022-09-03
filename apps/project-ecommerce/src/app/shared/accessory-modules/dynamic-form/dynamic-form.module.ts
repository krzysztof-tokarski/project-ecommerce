import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormInputComponent } from './components/dynamic-form-input/dynamic-form-input.component';
import { SharedModule } from '@shared/shared-module/shared.module';

@NgModule({
  declarations: [DynamicFormComponent, DynamicFormInputComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
