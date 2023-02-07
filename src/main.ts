import { NestFactory } from "@nestjs/core"
import { AppModule } from "@app/app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(4000)
  console.log(`\u{1F680} App is running on: ${await app.getUrl()}`)
}
bootstrap()
