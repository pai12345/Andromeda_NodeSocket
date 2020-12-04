import dotenv from "dotenv";
dotenv.config();

const env = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || process.env.DEV_PORT;

const generateEnv = () => {
  return {
    env: env,
    PORT: PORT,
  };
};

export default generateEnv;
