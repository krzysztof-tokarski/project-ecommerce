import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInputBase, } from './models/form-input-base.class';


@Component({
  selector: 'ecommerce-dynamic-form[formFields]',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() public formFields!: FormInputBase<string | boolean>[];

  protected form!: FormGroup;

  public ngOnInit() {
    const group: {
      [key: string]: AbstractControl,
    } = {};

    this.formFields.forEach((field) => {
      group[field.key] = new FormControl(field.value || '', [...field.validators || [], Validators.required]);
    });
    this.form = new FormGroup(group);
  }
}
