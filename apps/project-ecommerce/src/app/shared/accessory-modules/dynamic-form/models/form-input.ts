import { FormInputBase } from './form-input-base.class';

export class FormInput extends FormInputBase<string> {
  public override controlType = 'input';
}
