import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
    private readonly httpService: HttpService,
  ) {}

  async create(createuserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createuserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  getUserById(userId: number): Promise<AxiosResponse<any>> {
    return this.httpService.axiosRef.get(
      `https://reqres.in/api/users/${userId}`,
    );
  }

  /* async findOne(id: string) {
    return this.userModel.findById(id);
  } */

  async remove(id: string) {
    return this.userModel.findByIdAndRemove(id);
  }
}
