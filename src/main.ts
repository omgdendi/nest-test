import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

async function start() {
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule);
    console.log(process.env.POSTGRES_USER);
    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();