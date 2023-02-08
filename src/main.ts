import { NestFactory } from "@nestjs/core"
import { AppModule } from "@app/app.module"
import { ValidationPipe } from "@nestjs/common"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(4000)
  console.log(`\u{1F680} App is running on: http://localhost:4000`)
}
bootstrap()
