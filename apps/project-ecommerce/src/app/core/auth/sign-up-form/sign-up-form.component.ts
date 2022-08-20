import { Component } from '@angular/core';
import { SignUpService } from './sign-up-service/sign-up.service';

@Component({
  selector: 'ecommerce-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  providers: [SignUpService]
})
export class SignUpFormComponent {
  constructor(private signUpService: SignUpService) { }

  protected form = this.signUpService.createSignUpForm();
}
