import { Controller, Get } from '@nestjs/common';

@Controller("")
export class AppController {
    @Get("")
    getHomepage() {
        return "Hello"
    }
}
