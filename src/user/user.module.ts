import { Module } from "@nestjs/common"
import { UserResolver } from "@app/user/user.resolver"
import { CqrsModule } from "@nestjs/cqrs"
import { FindAllUsersHandler } from "@app/user/handlers/find-all-users.handler"
import { RepositoryModule } from "@app/repositories/repositories.module"
import { UserCreateByInputHandler } from "@app/user/handlers/user-create-by-input.handler"
import { CryptographyModule } from "@app/cryptography/cryptography.module"

@Module({
  imports: [CqrsModule, RepositoryModule, CryptographyModule],
  providers: [UserResolver, FindAllUsersHandler, UserCreateByInputHandler],
})
export class UserModule {}
