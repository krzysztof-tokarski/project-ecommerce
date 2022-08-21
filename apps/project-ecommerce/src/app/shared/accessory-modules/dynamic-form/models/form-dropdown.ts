import { FormInputBase } from './form-input-base.class';

export class FormDropdown extends FormInputBase<string> {
  public override controlType = 'dropdown';
}
