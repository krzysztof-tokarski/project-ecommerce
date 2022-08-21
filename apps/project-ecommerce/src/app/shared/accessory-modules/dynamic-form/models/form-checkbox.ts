import { FormInputBase } from './form-input-base.class';
export class FormCheckbox extends FormInputBase<string> {
  public override controlType = 'checkbox';
}
