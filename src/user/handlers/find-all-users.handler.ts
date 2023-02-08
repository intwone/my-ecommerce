import { UsersRepository } from "@app/repositories/user/users.repository"
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs"
import { User } from "@prisma/client"
import { FindAllUsersQuery } from "@app/user/queries/find-all-users.query"

@QueryHandler(FindAllUsersQuery)
export class FindAllUsersHandler implements IQueryHandler<FindAllUsersQuery> {
  public constructor(private readonly usersRepository: UsersRepository) {}

  public async execute(): Promise<User[]> {
    return this.usersRepository.findMany()
  }
}
