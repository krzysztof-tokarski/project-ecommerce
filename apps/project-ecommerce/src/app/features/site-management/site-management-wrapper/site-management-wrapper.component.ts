import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarConfigService } from './menubar-config.service';

@Component({
  selector: 'ecommerce-site-management-wrapper',
  templateUrl: './site-management-wrapper.component.html',
  styleUrls: ['./site-management-wrapper.component.scss'],
  providers: [MenubarConfigService],
})
export class SiteManagementWrapperComponent {
  protected menuBarConfig!: MenuItem[];

  constructor(private menuBarConfigService: MenubarConfigService) {
    this.menuBarConfig = this.menuBarConfigService.config;
  }
}
