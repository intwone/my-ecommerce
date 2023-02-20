import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { join } from "path"
import { UserModule } from "@app/user/user.module"
import { CryptographyModule } from "./cryptography/cryptography.module"

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      autoSchemaFile: join(process.cwd(), "src", "schema.gql"),
    }),
    UserModule,
    CryptographyModule,
  ],
})
export class AppModule {}
