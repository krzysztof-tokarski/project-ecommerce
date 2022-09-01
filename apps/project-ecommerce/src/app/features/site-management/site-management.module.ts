import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared-module/shared.module';
import { SiteManagementWrapperComponent } from './site-management-wrapper/site-management-wrapper.component';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [SiteManagementWrapperComponent],
  imports: [
    CommonModule,
    SharedModule,
    MenubarModule,
    RouterModule.forChild([
      {
        path: '',
        component: SiteManagementWrapperComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
  ],
})
export class SiteManagementModule {}
