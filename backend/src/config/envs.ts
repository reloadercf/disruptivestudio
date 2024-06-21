import 'dotenv/config';

import {get} from 'env-var';

export const envs = {
    PORT: get('PORT').asPortNumber()|| 4000,
    MONGO_URL: get('MONGO_URL').required().asString(),
    DATABASE: get('DATABASE').required().asString(),
}