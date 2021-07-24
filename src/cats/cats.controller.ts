import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}

/**
 * Nest provides decorator for all of the standard HTTP methods: @Get(),
 * @Post(), @Put(), @Delete(), @Patch(), @Options() and @Head(). In addition
 * @All() defines an endpoint that handles all of them
 */
