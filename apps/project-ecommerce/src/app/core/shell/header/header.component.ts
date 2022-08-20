import { Component } from '@angular/core';
import { NavigationLink } from '../navigation/models/navigation-link.interface';

@Component({
  selector: 'ecommerce-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  protected navigationLinks: NavigationLink[] = [
    {
      label: 'App',
      url: '/app'
    },
    {
      label: 'Auth',
      url: '/auth'
    }
  ]

}
