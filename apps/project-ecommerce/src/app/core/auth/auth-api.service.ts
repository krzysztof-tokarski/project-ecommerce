import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserDto, SignInUserDto } from '@project-ecommerce/user-models';
import { environment } from 'apps/project-ecommerce/src/environments/environment';

@Injectable()
export class AuthApiService {
  private USERS_ENDPOINT = new URL(`${environment.API_URL}/users`).toString();
  private LOGIN_ENDPOINT = new URL(`${environment.API_URL}/login`).toString();

  constructor(private httpClient: HttpClient) {}

  public postNewUserData(newUserData: CreateUserDto) {
    this.httpClient.post(this.USERS_ENDPOINT, newUserData).subscribe();
  }

  public postSignInUserData(signInUserData: SignInUserDto) {
    this.httpClient.post(this.LOGIN_ENDPOINT, signInUserData).subscribe();
  }
}
