let _TvSchema

_TvSchema = {
    name: "Tvs",
    properties: {
        backdrop_path: "string?",
        first_air_date: "string?",
        genre_ids: "int?[]",
        id: "int?",
        name: "string?",
        origin_country: "string?[]",
        original_language: "string?",
        original_name: "string?",
        overview: "string?",
        popularity: "int?",
        poster_path: "string?",
        vote_average: "int?",
        vote_count: "int?",
    },
    primaryKey: "id",
}

export const TvSchema = _TvSchema