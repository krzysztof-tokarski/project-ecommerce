import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared-module/shared.module';
import { SiteManagementWrapperComponent } from './site-management-wrapper/site-management-wrapper.component';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { CreateProductFormComponent } from './site-management-wrapper/create-product-form/create-product-form.component';

@NgModule({
  declarations: [SiteManagementWrapperComponent, CreateProductFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    MenubarModule,
    RouterModule.forChild([
      {
        path: '',
        component: SiteManagementWrapperComponent,
        children: [
          {
            path: 'products/create',
            component: CreateProductFormComponent,
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
