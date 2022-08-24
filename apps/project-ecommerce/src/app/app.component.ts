import { Component } from '@angular/core';
import { NavigationLink } from '@core/shell/navigation/models/navigation-link.interface';

@Component({
  selector: 'ecommerce-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
  // TODO move to header
}
