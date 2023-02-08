import { UserCreateInput } from "@app/user/inputs/user-create.input"

export class UserCreateByInputCommand {
  public constructor(public readonly input: UserCreateInput) {}
}
