import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable()
export class MenubarConfigService {
  public readonly config: MenuItem[] = [
    {
      label: 'Products',
      icon: 'pi pi-box',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Product', routerLink: './products/create' },
            { label: 'Manufacturer' },
          ],
        },
        // { label: 'Open' },
        // { label: 'Quit' },
      ],
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        { label: 'Delete', icon: 'pi pi-fw pi-trash' },
        { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
      ],
    },
  ];
  // TODO
}
