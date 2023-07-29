import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { AvatarService } from '../avatars/avatar.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { CreateAvatarDto } from 'src/dto/create-avatar.dto';

@Controller('api/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly avatarService: AvatarService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':userId')
  async getUserById(@Param('userId') userId: number) {
    const response = await this.userService.getUserById(userId);
    return response.data.data;
  }

  @Get(':userId/avatar')
  async getAvatarById(@Param('userId') userId: number) {
    const response = await this.userService.getUserById(userId);
    const avatar = this.avatarService.converteImageToBase64(
      response.data.data.avatar,
    );
    return avatar;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
