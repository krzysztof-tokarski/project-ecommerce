import { DefaultTextInputControl } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-input/models/form-input-base/extensions/default-text-input-control.class';
import { PasswordControl } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-input/models/form-input-base/extensions/password-control.class';
import { FormInputBase } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-input/models/form-input-base/form-input-base.class';
import { InputType } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-input/models/input-type.enum';

export const signInFormFields: FormInputBase<string | boolean>[] = [
  new DefaultTextInputControl({
    label: 'Email',
    key: 'email',
    type: InputType.TEXT,
    required: true,
  }),
  new PasswordControl({
    label: 'Password',
    key: 'password',
    type: InputType.PASSWORD,
    required: true,
  }),
];
