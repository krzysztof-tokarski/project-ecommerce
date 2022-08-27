import { UserSnippetDto } from '@project-ecommerce/user-models';

export class AuthSuccessResponse {
  public accessToken: string;
  public user: UserSnippetDto;
}
