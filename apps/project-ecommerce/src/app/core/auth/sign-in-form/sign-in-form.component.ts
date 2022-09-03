import { Component } from '@angular/core';
import { DynamicFormWrapper } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-wrapper/dynamic-form-wrapper.abstract';
import { SignInService } from './sign-in-service/sign-in.service';

@Component({
  selector: 'ecommerce-sign-in-form',
  templateUrl:
    '../../../shared/accessory-modules/dynamic-form/components/dynamic-form-wrapper/default-form-wrapper.component.html',
  styleUrls: [
    '../../../shared/accessory-modules/dynamic-form/components/dynamic-form-wrapper/default-form-wrapper.component.scss',
  ],
  providers: [SignInService],
})
export class SignInFormComponent extends DynamicFormWrapper {
  protected readonly form = this.signInService.form;
  protected readonly formFields = this.signInService.formFields;
  protected readonly submitButtonLabel = 'sign in';
  protected readonly formTitle = 'sign in form';
  protected submitAction = this.submitSignInForm;

  constructor(private signInService: SignInService) {
    super();
  }

  private submitSignInForm() {
    this.signInService.submitSignInForm();
  }
}
