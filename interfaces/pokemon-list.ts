export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous?: string;
    results:  SmallPoke[];
}

export interface SmallPoke {
    name: string;
    url:  string;
    id: number;
    image: string;
}
