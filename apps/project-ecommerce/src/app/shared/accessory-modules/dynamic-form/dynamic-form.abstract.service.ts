import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { FormInputBase } from './components/dynamic-form-input/models/form-input-base/form-input-base.class';

export abstract class DynamicFormService {
  public abstract formFields: FormInputBase<string | boolean>[];
  public abstract form: FormGroup;

  protected initializeForm() {
    const group: {
      [key: string]: AbstractControl;
    } = {};

    this.formFields.forEach((field) => {
      group[field.key] = new FormControl(field.value || '', [
        ...(field.validators || []),
      ]);
    });

    this.form = new FormGroup(group);
  }
}
