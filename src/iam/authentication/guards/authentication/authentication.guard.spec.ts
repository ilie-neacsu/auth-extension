import { AuthenticationGuard } from './authentication.guard';
import { AuthType } from "../../enums/auth-type.enum";

const mockReflector = {
  getAllAndOverride: jest.fn().mockReturnValue([AuthType.Bearer]),
};

const mockAccessTokenGuard = {
  canActivate: jest.fn().mockReturnValue(true),
};

describe('AuthenticationGuard', () => {

  let authenticationGuard: AuthenticationGuard;

  beforeEach(() => {
    authenticationGuard = new AuthenticationGuard(
      mockReflector as any,
      mockAccessTokenGuard as any,
      )
  });

  it('should be defined', () => {
    expect(authenticationGuard).toBeDefined();
  });
});
