import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async create(user: Partial<User>): Promise<User> {
    const newUser = {
      id: Date.now().toString(),
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User;
    
    this.users.push(newUser);
    return newUser;
  }
} 