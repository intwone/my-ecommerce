import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class User {
  @Field()
  public readonly userId!: string

  @Field()
  public name!: string

  @Field()
  public email!: string

  @Field()
  public password!: string

  @Field()
  public createdAt!: Date

  @Field()
  public updatedAt!: Date
}
