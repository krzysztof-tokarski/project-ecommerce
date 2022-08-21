import { AbstractControl, FormControl, Validators, FormGroup } from '@angular/forms';
import { FormInputBase } from './models/form-input-base.class';

export abstract class DynamicFormService {
  public abstract formFields: FormInputBase<string | boolean>[]
  public abstract form: FormGroup;

  protected initalizeForm() {
    const group: {
      [key: string]: AbstractControl,
    } = {};

    this.formFields.forEach((field) => {
      group[field.key] = new FormControl(field.value || '', [...field.validators || [], Validators.required]);
    });
    this.form = new FormGroup(group);
  }
}
