import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputBase } from './models/form-input-base/form-input-base.class';

@Component({
  selector: 'ecommerce-dynamic-form-input[field][form]',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.scss'],
})
export class DynamicFormInputComponent {
  @Input() public field!: FormInputBase<string | boolean>;
  @Input() public form!: FormGroup;
}
