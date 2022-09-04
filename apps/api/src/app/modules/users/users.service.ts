import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, User } from '@project-ecommerce/user-models';

type UserProperty = keyof User;

@Injectable()
export class UsersService {
  // TODO abstract service
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  public async create(newUserData: CreateUserDto): Promise<User> {
    const createdUser = new this.UserModel(newUserData);
    return createdUser.save();
  }

  public async findOne(email: string, projectionProperties?: UserProperty[]) {
    return (await this.UserModel.findOne({ email }, projectionProperties?.join(' ')).exec()).toJSON();
  }
}
