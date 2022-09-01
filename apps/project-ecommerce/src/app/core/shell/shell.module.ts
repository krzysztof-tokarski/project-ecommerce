import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared-module/shared.module';
import { TopSearchbarComponent } from './header/top-searchbar/top-searchbar.component';
import { TopDropdownComponent } from './header/top-dropdown/top-dropdown.component';
import { TopCartComponent } from './header/top-cart/top-cart.component';
import { TopNavbarComponent } from './header/top-navbar/top-navbar.component';

@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    FooterComponent,
    TopSearchbarComponent,
    TopDropdownComponent,
    TopCartComponent,
    TopNavbarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
      },
      {
        path: 'manage',
        loadChildren: async () =>
          (await import('@site-management/site-management.module'))
            .SiteManagementModule,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
  ],
  exports: [ShellComponent],
})
export class ShellModule {}
