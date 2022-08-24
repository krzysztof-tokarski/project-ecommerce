import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'auth',
        loadChildren: async () =>
          (await import('@core/auth/auth.module')).AuthModule,
      },
      {
        path: 'app',
        loadChildren: async () =>
          (await import('@core/shell/shell.module')).ShellModule,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'app',
      },
      {
        path: '**',
        redirectTo: 'auth',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
