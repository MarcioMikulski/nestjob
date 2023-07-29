import { Controller, Get, Param } from '@nestjs/common';
import { AvatarService } from 'src/avatars/avatar.service';

@Controller('api/user')
export class AvatarController {
  constructor(private readonly avatarService: AvatarService) {}

  @Get(':userId/avatar')
  async getAvatarById(@Param('userId') userId: number) {
    const response = await this.avatarService.getUserById(userId);
    const avatar = this.avatarService.converteImageToBase64(
      response.data.data.avatar,
    );
    return avatar;
  }

  /*  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avatarService.remove(id);
  } */
}
