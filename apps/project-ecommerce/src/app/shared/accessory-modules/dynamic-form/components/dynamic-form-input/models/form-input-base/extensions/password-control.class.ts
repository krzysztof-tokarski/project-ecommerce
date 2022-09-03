import { ControlType } from '../../control-type.enum';
import { FormInputBase } from '../form-input-base.class';

export class PasswordControl extends FormInputBase<string> {
  public override controlType = ControlType.PASSWORD;
}
