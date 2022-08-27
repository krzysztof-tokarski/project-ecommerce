import { FormInput } from '@shared/accessory-modules/dynamic-form/models/form-input';
import { FormInputBase } from '@shared/accessory-modules/dynamic-form/models/form-input-base.class';

export const signInFormFields: FormInputBase<string | boolean>[] = [
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
];
