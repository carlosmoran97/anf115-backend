import { Controller, Get, Post, HttpCode } from '@nestjs/common';


@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('ab*cd')
  findAll(): string {
    return 'This route uses a wildcard';
  }
}

/**
 * Nest provides decorator for all of the standard HTTP methods: @Get(),
 * @Post(), @Put(), @Delete(), @Patch(), @Options() and @Head(). In addition
 * @All() defines an endpoint that handles all of them
 */
