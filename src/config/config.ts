import { config as conf } from "dotenv";

conf();

const _config={
    port:process.env.PORT,
    database:process.env.DATABASE,
}

export const config = Object.freeze(_config);

