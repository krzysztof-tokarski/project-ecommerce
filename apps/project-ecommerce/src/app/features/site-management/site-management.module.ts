import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared-module/shared.module';
import { SiteManagementWrapperComponent } from './site-management-wrapper/site-management-wrapper.component';
import { RouterModule } from '@angular/router';
import { CreateProductFormComponent } from './site-management-wrapper/create-product-form/create-product-form.component';
import { DynamicFormModule } from '@shared/accessory-modules/dynamic-form/dynamic-form.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SiteManagementWrapperComponent, CreateProductFormComponent],
  imports: [
    CommonModule,
    DynamicFormModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: SiteManagementWrapperComponent,
        children: [
          {
            path: 'products/create',
            component: CreateProductFormComponent,
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'products/create',
          },
          {
            path: '**',
            redirectTo: 'products/create',
          },
        ],
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
  ],
})
export class SiteManagementModule {}
