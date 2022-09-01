import { Component } from '@angular/core';
import { NavigationLink } from '@core/shell/navigation/models/navigation-link.interface';

@Component({
  selector: 'ecommerce-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
})
export class TopNavbarComponent {
  protected navigationLinks: NavigationLink[] = [
    {
      label: 'App',
      url: '/app',
    },
    {
      label: 'Auth',
      url: '/auth',
    },
  ];
}
