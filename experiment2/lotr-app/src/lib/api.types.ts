export interface Character {
  _id: string;
  race: string;
  gender: string;
  name: string;
  wikiUrl: string;
  height: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
}

export interface CharacterQuote {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
}
