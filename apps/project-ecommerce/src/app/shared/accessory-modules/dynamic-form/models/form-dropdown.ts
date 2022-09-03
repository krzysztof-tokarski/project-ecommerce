import { ControlType } from './control-type.enum';
import { FormInputBase } from './form-input-base.class';
export class FormDropdown extends FormInputBase<string> {
  public override controlType = ControlType.DROPDOWN;
}
