import { ValidatorFn } from '@angular/forms';

export interface FormInputBaseOptions<T> {
  value?: T;
  key?: string;
  label?: string;
  required?: boolean;
  order?: number;
  controlType?: string;
  type?: string;
  options?: { key: string; value: string }[];
  validators?: ValidatorFn[] | null;
  readonly?: boolean;
}
