import { Controller, Get, Post } from "@nestjs/common/decorators";
import { AuthService } from "./auth.service";

@Controller('auth')

export class AuthController {
    constructor(private authService: AuthService) {

    }

    @Get("/register")
    register() {
        return 'hello user';
    }
}