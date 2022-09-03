import { Component } from '@angular/core';
import { DynamicFormWrapper } from '@shared/accessory-modules/dynamic-form/dynamic-form-wrapper.abstract';
import { SignUpService } from './sign-up-service/sign-up.service';

@Component({
  selector: 'ecommerce-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  providers: [SignUpService],
})
export class SignUpFormComponent extends DynamicFormWrapper {
  protected readonly form = this.signUpService.form;
  protected readonly formFields = this.signUpService.formFields;

  constructor(private signUpService: SignUpService) {
    super();
  }

  protected submitSignUpForm() {
    this.signUpService.submitSignUpForm();
  }
}
