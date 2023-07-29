import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { CreateAvatarDto } from 'src/dto/create-avatar.dto';
import { User, UserDocument } from '../users/schemas/user.schema';
import { Avatar, AvatarDocument } from '../users/schemas/avatar.schema';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name, Avatar.name)
    private readonly userModel: Model<UserDocument>,
    private readonly avatarModel: Model<AvatarDocument>,
    private readonly httpService: HttpService,
  ) {}

  async create(createuserDto: CreateUserDto): Promise<UserDocument> {
    const user = new this.userModel(createuserDto);
    return user.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

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

  async remove(id: string) {
    return this.userModel.findByIdAndRemove(id);
  }
}
