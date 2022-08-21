import { Component } from '@angular/core';
import { SignUpService } from './sign-up-service/sign-up.service';

@Component({
  selector: 'ecommerce-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  providers: [SignUpService]
})
export class SignUpFormComponent {
  protected signUpForm = this.signUpService.form;
  protected formFields = this.signUpService.formFields;

  constructor(private signUpService: SignUpService) { }
}
