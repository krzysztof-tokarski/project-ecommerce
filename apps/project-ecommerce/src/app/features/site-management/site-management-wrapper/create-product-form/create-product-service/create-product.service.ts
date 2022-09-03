import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputBase } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-input/models/form-input-base/form-input-base.class';
import { DynamicFormService } from '@shared/accessory-modules/dynamic-form/dynamic-form.abstract.service';
import { createProductFormFields } from '../config/create-product-form-fields';

@Injectable()
export class CreateProductServcie extends DynamicFormService {
  public readonly formFields: FormInputBase<string | boolean>[] =
    createProductFormFields;
  public readonly form!: FormGroup;

  constructor() {
    super();
    super.initializeForm();
  }

  public submitCreateProductForm() {}

  // public submitSignInForm() {
  //   const { email, password } = this.form.controls;
  //   const loginData: SignInUserDto = {
  //     email: email.value,
  //     password: password.value,
  //   };

  //   this.authApiService.postSignInUserData(loginData);
  // }
}
