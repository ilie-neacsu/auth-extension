import { AccessTokenGuard } from './access-token.guard';
import { JwtService } from "@nestjs/jwt";
import jwtConfig from "../../../config/jwt.config";
import { ConfigType } from "@nestjs/config";

jest.mock("@nestjs/jwt", () => ({
  JwtService: jest.fn().mockImplementation(() => ({
    verifyAsync: jest.fn().mockResolvedValue({}),
  })),
}));

jest.mock("../../../config/jwt.config", () => {
  return {
    default: {
      KEY: "mockedKey",
      secret: "mockedSecret",
      audience: "mockedAudience",
      issuer: "mockedIssuer",
      accessTokenTtl: 3600,
    }
  };
});

describe('AccessTokenGuard', () => {

  let accessTokenGuard: AccessTokenGuard;
  let jwtService: JwtService;
  let jwtConfiguration: ConfigType<typeof jwtConfig>;


  beforeEach(() => {
    jwtService = new JwtService(null);
    jwtConfiguration = jwtConfig as any;
    accessTokenGuard = new AccessTokenGuard(jwtService, jwtConfiguration);
  });

  it('should be defined', () => {
    expect(accessTokenGuard).toBeDefined();
  });
});
