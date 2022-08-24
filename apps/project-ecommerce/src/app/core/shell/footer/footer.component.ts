import { Component, OnInit } from '@angular/core';
import { environment } from 'apps/project-ecommerce/src/environments/environment';

@Component({
  selector: 'ecommerce-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(environment.API_URL);
  }
}
