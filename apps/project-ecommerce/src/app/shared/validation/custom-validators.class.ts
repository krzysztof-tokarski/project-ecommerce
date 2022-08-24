import { AbstractControl, FormGroup } from '@angular/forms';
import { SignUpForm } from '@core/auth/sign-up-form/models/sign-up-form.interface';

export class CustomValidators {
  public static passwordMatch(control: AbstractControl) {
    const group = control as FormGroup<SignUpForm>;
    const password = group.controls.password.value;
    const passwordConfirmation = group.controls.confirmPassword.value;

    return password === passwordConfirmation
      ? null
      : { passwordsDontMatch: true };
  }
}
