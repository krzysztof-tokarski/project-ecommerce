import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputBase, } from './models/form-input-base.class';


@Component({
  selector: 'ecommerce-dynamic-form[formFields][form]',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  @Input() public formFields!: FormInputBase<string | boolean>[];
  @Input() public form!: FormGroup;
}
