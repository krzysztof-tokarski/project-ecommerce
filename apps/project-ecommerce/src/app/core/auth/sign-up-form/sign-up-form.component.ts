import { Component } from '@angular/core';
import { FormInput } from '@shared/accessory-modules/dynamic-form/models/form-input';
import { FormInputBase } from '@shared/accessory-modules/dynamic-form/models/form-input-base.class';
import { SignUpService } from './sign-up-service/sign-up.service';

@Component({
  selector: 'ecommerce-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  providers: [SignUpService]
})
export class SignUpFormComponent {
  protected signUpForm: FormInputBase<string | boolean>[] = [
    new FormInput({
      label: 'First name',
      key: 'firstName',
      type: 'text',
      required: true,
    }),

    new FormInput({
      label: 'Last name',
      key: 'lastName',
      type: 'text',
      required: true,
    }),
  ];

  constructor(private signUpService: SignUpService) { }

  // protected form = this.signUpService.createSignUpForm();
}
