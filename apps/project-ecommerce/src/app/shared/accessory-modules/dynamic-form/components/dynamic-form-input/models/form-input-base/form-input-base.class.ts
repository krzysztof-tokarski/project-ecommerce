import { ValidatorFn } from '@angular/forms';
import { ControlType } from '../control-type.enum';
import { FormInputBaseOptions } from '../form-input-base-options';
import { InputType } from '../input-type.enum';

export abstract class FormInputBase<T> implements FormInputBaseOptions<T> {
  public value: T | undefined;
  public key: string;
  public label: string;
  public order: number;
  public type: InputType;
  public options: { key: string; value: string }[];
  public validators: ValidatorFn[] | null;
  public readonly: boolean;
  public feedback: boolean;
  public controlType: ControlType;

  constructor(options: FormInputBaseOptions<T>) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.type = options.type || InputType.TEXT;
    this.options = options.options || [];
    this.validators = options.validators || [];
    this.readonly = !!options.readonly;
    this.feedback = !!options.feedback;
    this.controlType = options.controlType || ControlType.TEXT_INPUT;
  }
}
