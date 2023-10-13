export interface IPayloadJwt {
  userId: string;
  email: string;
}

export interface IToken {
  access_token: string;
}

export { LoginUserDto } from './login-user.dto';
export { RegisterUserDto } from './register-user.dto';
