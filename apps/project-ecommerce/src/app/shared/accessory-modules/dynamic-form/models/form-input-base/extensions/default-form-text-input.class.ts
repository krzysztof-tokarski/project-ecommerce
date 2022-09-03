import { ControlType } from '../../control-type.enum';
import { FormInputBase } from '../form-input-base.class';

export class DefaultFormTextInput extends FormInputBase<string> {
  public controlType = ControlType.INPUT_TEXT;
}
