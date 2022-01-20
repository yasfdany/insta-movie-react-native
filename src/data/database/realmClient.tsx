import Realm from "realm";
import { MovieSchema } from './schemas/MovieSchema';
import { TvSchema } from './schemas/TvSchema';
import { MovieDetailSchema } from './schemas/MovieDetailSchema';
import { MovieBookmarkSchema } from './schemas/MovieBookmarkSchema';

const realmClient = new Realm({
    path: "instamovie",
    schema: [
        MovieSchema,
        TvSchema,
        MovieBookmarkSchema,
        // MovieDetailSchema,
    ],
    schemaVersion: 2,
})

export default realmClient