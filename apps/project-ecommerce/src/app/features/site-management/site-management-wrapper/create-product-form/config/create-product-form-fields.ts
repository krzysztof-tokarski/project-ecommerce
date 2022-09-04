import { Validators } from '@angular/forms';
import { DefaultTextInputControl } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-input/models/form-input-base/extensions/default-text-input-control.class';
import { FileControl } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-input/models/form-input-base/extensions/file-control.class';
import { NumberControl } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-input/models/form-input-base/extensions/number-control.class';
import { TextareaControl } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-input/models/form-input-base/extensions/textarea-control.class';
import { FormInputBase } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-input/models/form-input-base/form-input-base.class';
import { InputType } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-input/models/input-type.enum';

export const createProductFormFields: FormInputBase<string | boolean>[] = [
  new DefaultTextInputControl({
    label: 'Name',
    key: 'name',
    type: InputType.TEXT,
    validators: [Validators.required],
    required: true,
  }),
  new TextareaControl({
    label: 'Description',
    key: 'description',
    validators: [Validators.required],
    required: true,
  }),
  new NumberControl({
    label: 'Price',
    key: 'price',
    validators: [Validators.required],
    required: true,
    // TODO remove required field from model
  }),
  new FileControl({
    label: 'Product image',
    key: 'file',
    validators: [Validators.required],
  }),
];
