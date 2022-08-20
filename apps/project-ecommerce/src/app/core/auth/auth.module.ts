import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SharedModule } from '@shared/shared-module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignUpFormComponent
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, FormsModule, RouterModule.forChild([
    {
      path: 'sign-up',
      component: SignUpFormComponent,
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'sign-up',
    },
    {
      path: '**',
      redirectTo: 'sign-up',
    }
  ])],
})
export class AuthModule { }
