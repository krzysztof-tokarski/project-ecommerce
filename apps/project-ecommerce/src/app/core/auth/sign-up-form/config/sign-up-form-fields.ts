import { DefaultFormTextInput } from '@shared/accessory-modules/dynamic-form/models/form-input-base/extensions/default-form-text-input.class';
import { FormPassword } from '@shared/accessory-modules/dynamic-form/models/form-input-base/extensions/form-password.class';
import { FormInputBase } from '@shared/accessory-modules/dynamic-form/models/form-input-base/form-input-base.class';
import { InputType } from '@shared/accessory-modules/dynamic-form/models/input-type.enum';

export const signUpformFields: FormInputBase<string | boolean>[] = [
  new DefaultFormTextInput({
    label: 'First name',
    key: 'firstName',
    type: InputType.TEXT,
    required: true,
  }),
  new DefaultFormTextInput({
    label: 'Last name',
    key: 'lastName',
    type: InputType.TEXT,
    required: true,
  }),
  new DefaultFormTextInput({
    label: 'Email',
    key: 'email',
    type: InputType.TEXT,
    required: true,
  }),
  new FormPassword({
    label: 'Password',
    key: 'password',
    type: InputType.PASSWORD,
    required: true,
    feedback: true,
  }),
  new DefaultFormTextInput({
    label: 'Confirm password',
    key: 'confirmPassword',
    type: InputType.PASSWORD,
    required: true,
  }),
];
