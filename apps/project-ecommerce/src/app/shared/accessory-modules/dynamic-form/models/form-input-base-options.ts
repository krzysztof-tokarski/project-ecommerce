import { ValidatorFn } from '@angular/forms';
import { ControlType } from './control-type.enum';
import { InputType } from './input-type.enum';

export interface FormInputBaseOptions<T> {
  value?: T;
  key?: string;
  label?: string;
  required?: boolean;
  order?: number;
  controlType?: ControlType;
  type?: InputType;
  options?: { key: string; value: string }[];
  validators?: ValidatorFn[] | null;
  readonly?: boolean;
  feedback?: boolean;
}
