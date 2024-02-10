import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../users/entities/user.entity";
import { Repository } from "typeorm";
import { HashingService } from "../hashing/hashing.service";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly hashingService: HashingService,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    try {
      const  user = new User();
      user.email = signUpDto.email;
      user.password = await this.hashingService.hash(signUpDto.password);
      await this.userRepository.save(user);
    } catch (err) {
      const pgUniqueViolationErrorCode = '23505';
      if(err.code === pgUniqueViolationErrorCode) {
        throw new ConflictException();
      }
      throw err;
    }
  }

  async signIn(signInDto: SignInDto): Promise<boolean> {
    const user = await this.userRepository.findOneBy({
      email: signInDto.email,
    });
    if(!user) {
      throw new UnauthorizedException('User does not exists')
    }
    const isEqual = await this.hashingService.compare(
      signInDto.password,
      user.password,
    )
    if(!isEqual) {
      throw new UnauthorizedException('Password does not match')
    }
    // TODO: Generate and return JWT token
    return true;
  }
}