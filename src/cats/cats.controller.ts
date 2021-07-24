import { Controller, Get, Post, HttpCode } from '@nestjs/common';


@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
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

/**
 * Often your status code isn't static but depends on various factors. In that case, you can use
 * a library specific response (inject using @Res()) object (or, in case of an error, throw an exception).
 */
