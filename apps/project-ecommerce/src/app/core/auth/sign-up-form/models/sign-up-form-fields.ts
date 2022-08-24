import { FormInput } from '@shared/accessory-modules/dynamic-form/models/form-input';
import { FormInputBase } from '@shared/accessory-modules/dynamic-form/models/form-input-base.class';

export const signUpformFields: FormInputBase<string | boolean>[] = [
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
    key: 'confirmPassword',
    type: 'password',
    required: true,
  }),
];
