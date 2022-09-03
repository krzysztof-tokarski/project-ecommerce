import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BcryptService } from '@core/auth/bcrypt.service';
import { DynamicFormService } from '@shared/accessory-modules/dynamic-form/dynamic-form.abstract.service';
import { CustomValidators } from '@shared/validation/custom-validators.class';
import { signUpformFields } from '../config/sign-up-form-fields';
import { SignUpForm } from '../models/sign-up-form.interface';
import { CreateUserDto } from '@project-ecommerce/user-models';
import { AuthApiService } from '@core/auth/auth-api.service';
import { FormInputBase } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-input/models/form-input-base/form-input-base.class';

@Injectable()
export class SignUpService extends DynamicFormService {
  public readonly formFields: FormInputBase<string | boolean>[] =
    signUpformFields;
  public readonly form!: FormGroup<SignUpForm>;

  constructor(
    private bcryptService: BcryptService,
    private authApiService: AuthApiService
  ) {
    super();
    super.initializeForm();
    this.form.setValidators(CustomValidators.passwordMatch);
  }

  public submitSignUpForm() {
    const newUserData = this.createUserDto();

    this.authApiService.postNewUserData(newUserData);
  }

  private createUserDto(): CreateUserDto {
    const { password, firstName, lastName, email } = this.form.controls;
    const { salt, hashedPassword } = this.bcryptService.hashPassword(
      password.value
    );

    const newUserData: CreateUserDto = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      salt,
      hashedPassword,
    };

    return newUserData;
  }
}
