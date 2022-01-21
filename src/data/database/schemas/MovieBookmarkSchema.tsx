let _MovieBookmarkSchema

_MovieBookmarkSchema = {
    name: "MovieBookmarks",
    properties: {
        adult: "bool?",
        backdrop_path: "string?",
        genre_ids: "int?[]",
        id: "int?",
        original_language: "string?",
        original_title: "string?",
        overview: "string?",
        popularity: "int?",
        poster_path: "string?",
        release_date: "string?",
        title: "string?",
        video: "bool?",
        vote_average: "int?",
        vote_count: "int?",
    },
    primaryKey: "id",
}

export const MovieBookmarkSchema = _MovieBookmarkSchema
