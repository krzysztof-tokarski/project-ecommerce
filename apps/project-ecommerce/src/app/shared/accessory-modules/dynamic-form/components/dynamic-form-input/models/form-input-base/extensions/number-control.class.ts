import { ControlType } from '../../control-type.enum';
import { FormInputBase } from '../form-input-base.class';

export class NumberControl extends FormInputBase<string> {
  public override controlType = ControlType.NUMBER;
}
