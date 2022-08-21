import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from '@shared/accessory-modules/dynamic-form/dynamic-form.abstract.service';
import { FormInput } from '@shared/accessory-modules/dynamic-form/models/form-input';
import { FormInputBase } from '@shared/accessory-modules/dynamic-form/models/form-input-base.class';
import { SignUpForm } from './sign-up-form.interface';

@Injectable()
export class SignUpService extends DynamicFormService {
  public readonly formFields: FormInputBase<string | boolean>[] = [
    new FormInput({
      label: 'First name',
      key: 'firstName',
      type: 'text',
      required: true,
    }),
    new FormInput({
      label: 'Last name',
      key: 'lastName',
      type: 'text',
      required: true,
    }),
    new FormInput({
      label: 'Email',
      key: 'email',
      type: 'text',
      required: true,
    }),
    new FormInput({
      label: 'Password',
      key: 'password',
      type: 'password',
      required: true,
    }),
    new FormInput({
      label: 'Confirm password',
      key: 'confirm-password',
      type: 'password',
      required: true,
    }),
  ];

  public readonly form!: FormGroup<SignUpForm>;

  constructor() {
    super();
    super.initalizeForm();
  }
}
