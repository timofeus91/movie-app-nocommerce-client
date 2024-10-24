export type TMovieSearchParams = {
    include_adult : boolean;
    language: string;
    page: number;
    // Date
    release_date_gte: string;
    release_date_lte: string;
    //
    region : string;
    vote_average_gte: number;
    vote_average_lte: number;
    with_genres: string;
    with_keywords: string;
    with_origin_country: string;
}
