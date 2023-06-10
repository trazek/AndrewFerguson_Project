export interface LoTRMovies  {
    _id: string;
    name: string;
    runtimeInMinutes: number;
    budgetInMillions: number;
    academyAwardWins: string;
    rottenTomatoesScore: number;
}

export interface LoTRCharacter {
    _id: string;
    height: string;
    race: string;
    gender: string;
    birth: string;
    spouse: string;
    death: string;
    realm: string;
    hair: string;
    name: any;
    wikiUrl: string;
}


export interface LoTRQuote {
    _id: string;
    dialog: string;
    movie: string;
    character: string;
    id: string;
}
