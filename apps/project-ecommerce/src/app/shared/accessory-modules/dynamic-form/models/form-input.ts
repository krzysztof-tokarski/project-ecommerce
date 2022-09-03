import { ControlType } from './control-type.enum';
import { FormInputBase } from './form-input-base.class';

export class FormInput extends FormInputBase<string> {
  public override controlType = ControlType.INPUT_TEXT;
}
