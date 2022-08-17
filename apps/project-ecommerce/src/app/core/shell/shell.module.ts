import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule.forChild([
    {
      path: '',
      component: ShellComponent,
    },
    {
      path: '**',
      redirectTo: '',
    },
  ])],
  exports: [ShellComponent]
})
export class ShellModule { }
