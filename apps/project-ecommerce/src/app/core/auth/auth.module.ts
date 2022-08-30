import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SharedModule } from '@shared/shared-module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from '@shared/accessory-modules/dynamic-form/dynamic-form.module';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { BcryptService } from './bcrypt.service';
import { AuthApiService } from './auth-api.service';
import { AuthWrapper } from './auth-component/auth-wrapper.component';

@NgModule({
  declarations: [SignUpFormComponent, SignInFormComponent, AuthWrapper],
  imports: [
    CommonModule,
    DynamicFormModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthWrapper,
        children: [
          {
            path: 'sign-up',
            component: SignUpFormComponent,
          },
          {
            path: 'sign-in',
            component: SignInFormComponent,
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'sign-up',
          },
          {
            path: '**',
            redirectTo: 'sign-up',
          },
        ],
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
  ],
  providers: [BcryptService, AuthApiService],
})
export class AuthModule {}
