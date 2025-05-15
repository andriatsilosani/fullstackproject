import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInInput } from './dto/signIn.input';
import { Authpayload } from './entities/auth-payload.entity';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Authpayload)
  async signIn(@Args("signInInput") signInInput: SignInInput) {
    const user = await this.authService.validateLocalUser(signInInput);

    return await this.authService.login(user);
  }
}
 