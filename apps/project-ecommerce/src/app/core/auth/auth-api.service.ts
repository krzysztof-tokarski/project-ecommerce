import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@project-ecommerce/user-models';
import { environment } from 'apps/project-ecommerce/src/environments/environment';

@Injectable()
export class AuthApiService {
  constructor(private httpClient: HttpClient) { }

  public postNewUserData(newUser: User) {
    const USERS_ENDPOINT = new URL(`${environment.API_URL}/users`).toString();

    this.httpClient.post(USERS_ENDPOINT, newUser).subscribe();
  }
}
