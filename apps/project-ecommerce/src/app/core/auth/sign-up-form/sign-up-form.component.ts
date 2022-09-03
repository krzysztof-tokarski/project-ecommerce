import { Component } from '@angular/core';
import { DynamicFormWrapper } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-wrapper/dynamic-form-wrapper.abstract';
import { SignUpService } from './sign-up-service/sign-up.service';

@Component({
  selector: 'ecommerce-sign-up-form',
  templateUrl:
    '../../../shared/accessory-modules/dynamic-form/components/dynamic-form-wrapper/default-form-wrapper.component.html',
  styleUrls: [
    '../../../shared/accessory-modules/dynamic-form/components/dynamic-form-wrapper/default-form-wrapper.component.scss',
  ],
  providers: [SignUpService],
})
export class SignUpFormComponent extends DynamicFormWrapper {
  protected readonly form = this.signUpService.form;
  protected readonly formFields = this.signUpService.formFields;
  protected readonly submitButtonLabel = 'sign up';
  protected readonly formTitle = 'sign up form';
  protected readonly submitAction = this.submitSignUpForm;
  protected override readonly bottomInnerHtml =
    '<span class="have-account">Already have an account? <a href="auth/sign-in">Log in.</a></span>';

  constructor(private signUpService: SignUpService) {
    super();
  }

  private submitSignUpForm() {
    this.signUpService.submitSignUpForm();
  }
}
