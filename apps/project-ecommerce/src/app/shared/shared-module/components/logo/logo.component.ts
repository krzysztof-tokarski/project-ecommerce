import { Component, Input } from '@angular/core';

@Component({
  selector: 'ecommerce-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  @Input() public sizeInPixels!: number;
  @Input() public color!: string;
  protected defaultColor = 'rgb(111, 67, 187)';
  // TODO ref to SASS variable?
}
