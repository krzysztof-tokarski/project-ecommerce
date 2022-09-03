import { Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputBase } from '../dynamic-form-input/models/form-input-base/form-input-base.class';

@Directive()
export abstract class DynamicFormWrapper {
  protected bottomInnerHtml: string;

  protected abstract form: FormGroup;
  protected abstract formFields: FormInputBase<string | boolean>[];
  protected abstract formTitle: string;
  protected abstract submitButtonLabel: string;
  protected abstract submitAction: Function;
}

// public ngOnInit(): void {
//   this.initializeForm();
// }

// protected initializeForm() {
//   const group: {
//     [key: string]: AbstractControl;
//   } = {};

//   this.formFields.forEach((field) => {
//     group[field.key] = new FormControl(field.value || '', [
//       ...(field.validators || []),
//       Validators.required,
//     ]);
//   });

//   this.form = new FormGroup(group);
// }

// TODO consider moving this logic here to
