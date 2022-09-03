import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthApiService } from '@core/auth/auth-api.service';
import { SignInUserDto } from '@project-ecommerce/user-models';
import { FormInputBase } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-input/models/form-input-base/form-input-base.class';
import { DynamicFormService } from '@shared/accessory-modules/dynamic-form/dynamic-form.abstract.service';
import { signInFormFields } from '../config/sign-in-form-fields';
import { SignInForm } from '../models/sign-in-form.interface';

@Injectable()
export class SignInService extends DynamicFormService {
  public readonly formFields: FormInputBase<string | boolean>[] =
    signInFormFields;
  public readonly form!: FormGroup<SignInForm>;

  constructor(private authApiService: AuthApiService) {
    super();
    super.initializeForm();
  }

  public submitSignInForm() {
    const { email, password } = this.form.controls;
    const loginData: SignInUserDto = {
      email: email.value,
      password: password.value,
    };

    this.authApiService.postSignInUserData(loginData);
  }
}
