import dotenv from "dotenv";
dotenv.config();

const env = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || process.env.DEV_PORT;
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

const generateEnv = () => {
  return {
    env: env,
    PORT: PORT,
    ENCRYPTION_KEY: ENCRYPTION_KEY,
  };
};

export default generateEnv;
