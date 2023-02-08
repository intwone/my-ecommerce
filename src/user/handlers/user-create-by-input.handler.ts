import { UsersRepository } from "@app/repositories/user/users.repository"
import { UnprocessableEntityException } from "@nestjs/common"
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { User } from "@prisma/client"
import { UserCreateByInputCommand } from "@app/user/commands/user-create-by-input.command"

@CommandHandler(UserCreateByInputCommand)
export class UserCreateByInputHandler implements ICommandHandler<UserCreateByInputCommand> {
  public constructor(private readonly userRepository: UsersRepository) {}

  public async execute(command: UserCreateByInputCommand): Promise<User> {
    const { name, email, password } = command.input
    const userExists = await this.userRepository.findByEmail(email)
    if (userExists) throw new UnprocessableEntityException("email already taken")
    const newUser = await this.userRepository.create({ name, email, password })
    return newUser
  }
}
