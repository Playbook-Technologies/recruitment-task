import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  /** TODO: It's missing CORS setup  here */
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
