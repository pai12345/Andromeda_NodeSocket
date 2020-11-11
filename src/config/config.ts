import dotenv from "dotenv";
dotenv.config();

const env = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 4000;

const generateEnv = () => {
  return {
    env: env,
    PORT: PORT,
  };
};

export default generateEnv;
