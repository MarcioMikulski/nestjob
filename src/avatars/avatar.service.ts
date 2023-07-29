import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Avatar } from '../entities/avatar.entity';
import { CreateAvatarDto } from 'src/dto/create-avatar.dto';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AvatarService {
  constructor(
    @Inject('AVATAR_MODEL')
    private avatarModel: Model<Avatar>,
  ) {}

  converteImageToBase64(image: string) {
    const data = Buffer.from(image).toString('base64');
    return data;
  }

  async saveAvatar(createavatarDto: CreateAvatarDto): Promise<Avatar> {
    const avatar = this.avatarModel.create(createavatarDto);
    return avatar;
  }

  async getAvatar(id: string): Promise<Avatar> {
    const avatar = this.avatarModel.findById(id);
    return avatar;
  }
}
