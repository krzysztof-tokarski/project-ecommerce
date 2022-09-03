import { ValidatorFn } from '@angular/forms';
import { ControlType } from './control-type.enum';
import { FormInputBaseOptions } from './form-input-base-options';

export class FormInputBase<T> implements FormInputBaseOptions<T> {
  public value: T | undefined;
  public key: string;
  public label: string;
  public required: boolean;
  public order: number;
  public controlType: ControlType;
  public type: string;
  public options: { key: string; value: string }[];
  public validators: ValidatorFn[] | null;
  public readonly: boolean;

  constructor(options: FormInputBaseOptions<T>) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || ControlType.INPUT_TEXT;
    this.type = options.type || '';
    this.options = options.options || [];
    this.validators = options.validators || [];
    this.readonly = !!options.readonly;
  }
}
