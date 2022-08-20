import { Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { SignUpForm } from './sign-up-form.interface';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private fb: NonNullableFormBuilder) { }

  public createSignUpForm(): FormGroup<SignUpForm> {
    return this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      confirmPassword: this.fb.control('', Validators.required),
    })
  }
}
