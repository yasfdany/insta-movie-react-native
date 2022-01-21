let _MovieDetailSchema
let _GenreSchema

_GenreSchema = {
    name: "Genres",
    primaryKey: "id",
    properties: {
        id: "int?",
        name: "string?",
    }
}

export const GenreSchema = _GenreSchema

_MovieDetailSchema = {
    name: "MovieDetails",
    properties: {
        adult: "bool?",
        backdrop_path: "string?",
        budget: "int?",
        genres: "Genres[]",
        homepage: "string?",
        id: "int?",
        imdb_id: "string?",
        original_language: "string?",
        original_title: "string?",
        overview: "string?",
        popularity: "int?",
        poster_path: "string?",
        release_date: "string?",
        revenue: "int?",
        runtime: "int?",
        status: "string?",
        tagline: "string?",
        title: "string?",
        video: "bool?",
        vote_average: "int?",
        vote_count: "int?",
    },
    primaryKey: "id",
}

export const MovieDetailSchema = _MovieDetailSchema
