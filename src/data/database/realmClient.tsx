import Realm from "realm";
import { MovieSchema } from './schemas/MovieSchema';
import { TvSchema } from './schemas/TvSchema';
import { MovieDetailSchema } from './schemas/MovieDetailSchema';

const realmClient = new Realm({
    schema: [
        MovieSchema,
        TvSchema,
        // MovieDetailSchema,
    ],
    schemaVersion: 4,
})

export default realmClient