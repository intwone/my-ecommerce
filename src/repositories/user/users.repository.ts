import { PrismaService } from "@app/prisma/prisma.service"
import { Injectable } from "@nestjs/common"
import { User } from "@prisma/client"

@Injectable()
export class UsersRepository {
  public constructor(private readonly prismaService: PrismaService) {}

  public async find(args: { where: { email?: string } }): Promise<User | null> {
    return this.prismaService.user.findFirst({
      ...args,
    })
  }

  public async findMany(): Promise<User[]> {
    return this.prismaService.user.findMany()
  }

  public async findByEmail(email: string): Promise<User> {
    return this.find({
      where: { email: email },
    })
  }

  public async create(args: { name: string; email: string; password: string }): Promise<User> {
    return this.prismaService.user.create({
      data: { ...args },
    })
  }
}
