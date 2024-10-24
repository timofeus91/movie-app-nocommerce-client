export type TTvSearchParams = {
    with_status: string;
    with_type: string;

    include_adult : boolean;
    language: string;
    page: number;
    // Date
    air_date_gte: string;
    air_date_lte: string;
    //
    region : string;
    vote_average_gte: number;
    vote_average_lte: number;
    with_genres: string;
    with_keywords: string;
    with_origin_country: string;
}
