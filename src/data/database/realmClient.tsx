import Realm from "realm";
import { MovieSchema } from './schemas/MovieSchema';
import { TvSchema } from './schemas/TvSchema';
import { MovieDetailSchema, GenreSchema } from './schemas/MovieDetailSchema';
import { MovieBookmarkSchema } from './schemas/MovieBookmarkSchema';

const realmClient = new Realm({
    path: "instamovie.realm",
    schema: [
        MovieSchema,
        TvSchema,
        MovieBookmarkSchema,
        MovieDetailSchema,
        GenreSchema,
    ],
    schemaVersion: 1,
})

export default realmClient