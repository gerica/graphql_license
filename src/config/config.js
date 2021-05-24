import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'desenv') {
  dotenv.config({ path: `${process.cwd()}/src/config/.env` });
} else {
  dotenv.config({ path: `${process.cwd()}/src/config/.env.prod` });
}

const { PORT, HOST, PATH_GRAPHQL } = process.env;

export default {
  endpoint: PATH_GRAPHQL,
  host: HOST,
  port: PORT,
};
