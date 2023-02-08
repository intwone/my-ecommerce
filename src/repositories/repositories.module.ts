import { PrismaModule } from "@app/prisma/prisma.module"
import { Module } from "@nestjs/common"
import { UsersRepository } from "@app/repositories/user/users.repository"

const Repositories = [UsersRepository]

@Module({
  imports: [PrismaModule],
  providers: [...Repositories],
  exports: [...Repositories],
})
export class RepositoryModule {}
