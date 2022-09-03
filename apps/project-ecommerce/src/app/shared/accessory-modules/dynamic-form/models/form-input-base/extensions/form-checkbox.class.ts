import { ControlType } from '../../control-type.enum';
import { FormInputBase } from '../form-input-base.class';

export class FormCheckbox extends FormInputBase<string> {
  public controlType = ControlType.CHECKBOX;
}
