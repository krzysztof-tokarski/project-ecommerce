import { UserSnippetDto } from '@project-ecommerce/user-models';

export interface JwtSignPayload {
  sub: string;
  user: UserSnippetDto;
}
