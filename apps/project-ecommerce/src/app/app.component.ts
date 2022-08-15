import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@fullstack-node-portfolio-app/api-interfaces';

@Component({
  selector: 'fullstack-node-portfolio-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
