import { CommandBus, QueryBus } from "@nestjs/cqrs"
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql"
import { User } from "@prisma/client"
import { FindAllUsersQuery } from "@app/user/queries/find-all-users.query"
import { User as UserModel } from "@app/user/user.model"
import { UserCreateInput } from "@app/user/inputs/user-create.input"
import { UserCreateByInputCommand } from "@app/user/commands/user-create-by-input.command"

@Resolver(() => UserModel)
export class UserResolver {
  public constructor(private readonly queryBus: QueryBus, private readonly commandBus: CommandBus) {}

  @Query(() => [UserModel])
  public async users(): Promise<User[]> {
    return this.queryBus.execute(new FindAllUsersQuery())
  }

  @Mutation(() => UserModel)
  public async userCreate(@Args("input") input: UserCreateInput): Promise<User> {
    return this.commandBus.execute(new UserCreateByInputCommand(input))
  }
}
