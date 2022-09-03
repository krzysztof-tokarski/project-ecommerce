import { ControlType } from '../../control-type.enum';
import { FormInputBase } from '../form-input-base.class';

export class TextareaControl extends FormInputBase<string> {
  public override controlType = ControlType.TEXT_AREA;
}
