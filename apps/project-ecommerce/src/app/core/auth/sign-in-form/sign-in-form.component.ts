import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DynamicFormWrapper } from '@shared/accessory-modules/dynamic-form/dynamic-form-wrapper.abstract';
import { SignInService } from './sign-in-service/sign-in.service';

@Component({
  selector: 'ecommerce-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  providers: [SignInService],
})
export class SignInFormComponent extends DynamicFormWrapper {
  protected form = this.signInService.form;
  protected formFields = this.signInService.formFields;

  constructor(
    private signInService: SignInService,
    private httpClient: HttpClient
  ) {
    super();
  }

  protected submitSignInForm() {
    this.signInService.submitSignInForm();
  }

  protected profile() {
    this.httpClient.get('http://localhost:3333/api/users/profile').subscribe();
  }
}
