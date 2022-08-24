import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormInputComponent } from './components/dynamic-form-input/dynamic-form-input.component';

@NgModule({
  declarations: [DynamicFormComponent, DynamicFormInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
