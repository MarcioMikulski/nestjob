import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateAvatarDto } from 'src/dto/create-avatar.dto';

import { Avatar, AvatarDocument } from '../users/schemas/avatar.schema';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AvatarService {
  constructor(
    @InjectModel(Avatar.name)
    private readonly avatarModel: Model<AvatarDocument>,
    private readonly httpService: HttpService,
  ) {}

  getUserById(userId: number): Promise<AxiosResponse<any>> {
    return this.httpService.axiosRef.get(
      `https://reqres.in/api/users/${userId}`,
    );
  }

  converteImageToBase64(image: string) {
    const data = Buffer.from(image).toString('base64');
    return data;
  }

  saveAvatar(createavatarDto: CreateAvatarDto) {
    const avatar = new this.avatarModel(createavatarDto);
    return avatar.save();
  }

  /* async findOne(id: string) {
    return this.userModel.findById(id);
  } */
}
