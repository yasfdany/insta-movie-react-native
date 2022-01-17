import PropTypes from "prop-types"

let _MovieDetailSchema
let _BelongsToCollection
let _Genre
let _ProductionCompany
let _ProductionCountry
let _SpokenLanguage
_SpokenLanguage = {
    english_name: "string?",
    iso_639_1: "string?",
    name: "string?",
}
_ProductionCountry = {
    iso_3166_1: "string?",
    name: "string?",
}
_ProductionCompany = {
    id: "number?",
    logo_path: "string?",
    name: "string?",
    origin_country: "string?",
}
_Genre = {
    id: "number?",
    name: "string?",
}
_BelongsToCollection = {
    id: "number?",
    name: "string?",
    poster_path: "string?",
    backdrop_path: "string?",
}
_MovieDetailSchema = {
    name: "MovieDetails",
    properties: {
        adult: "bool?",
        backdrop_path: "string?",
        belongs_to_collection: _BelongsToCollection,
        budget: "number?",
        genres: PropTypes.arrayOf(_Genre),
        homepage: "string?",
        id: "number?",
        imdb_id: "string?",
        original_language: "string?",
        original_title: "string?",
        overview: "string?",
        popularity: "number?",
        poster_path: "string?",
        production_companies: PropTypes.arrayOf(_ProductionCompany),
        production_countries: PropTypes.arrayOf(_ProductionCountry),
        release_date: "string?",
        revenue: "number?",
        runtime: "number?",
        spoken_languages: PropTypes.arrayOf(_SpokenLanguage),
        status: "string?",
        tagline: "string?",
        title: "string?",
        video: "bool?",
        vote_average: "number?",
        vote_count: "number?",
    },
    primaryKey: "id",
}

export const MovieDetailSchema = _MovieDetailSchema
