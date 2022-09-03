import { FormGroup } from '@angular/forms';
import { FormInputBase } from '../../models/form-input-base/form-input-base.class';

export abstract class DynamicFormWrapper {
  protected bottomInnerHtml: string;

  protected abstract form: FormGroup;
  protected abstract formFields: FormInputBase<string | boolean>[];
  protected abstract formTitle: string;
  protected abstract submitButtonLabel: string;
  protected abstract submitAction: any;
}
