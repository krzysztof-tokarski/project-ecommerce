import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { SignUpForm } from '@core/auth/sign-up-form/models/sign-up-form.interface';

export class CustomValidators {
  public static standardTextAreaValidatorsComposition = Validators.compose([
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(256),
  ]);

  public static standardTextInputValidatorsComposition = Validators.compose([
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(58),
  ]);
  // TODO add these to the existing forms

  public static passwordMatch(control: AbstractControl) {
    const group = control as FormGroup<SignUpForm>;
    const password = group.controls.password.value;
    const passwordConfirmation = group.controls.confirmPassword.value;

    return password === passwordConfirmation
      ? null
      : { passwordsDontMatch: true };
  }
}
