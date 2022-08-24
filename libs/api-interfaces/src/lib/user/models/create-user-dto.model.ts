export class CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  salt: string;
  hashedPassword: string;
}
