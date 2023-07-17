// Helpers for server side data fetching

import { getApiUrl, getAPiHeaders } from "@/lib/api.constants";
import { Character, CharacterQuote } from "@/lib/api.types";

const unWrapData = async (response: Response) => (await response.json()).docs;

export const getCharacters = async (filter?: string): Promise<[Character]> => {
  const data = await fetch(
    `${getApiUrl()}/character${!filter ? "" : `?${filter}`}`,
    getAPiHeaders()
  );

  return unWrapData(data);
};

export const getCharacter = async (id: string): Promise<Character> => {
  const data = await fetch(`${getApiUrl()}/character/${id}`, getAPiHeaders());

  return (await unWrapData(data))[0];
};

export const getCharacterQuote = async (
  id: string
): Promise<[CharacterQuote]> => {
  const data = await fetch(
    `${getApiUrl()}/character/${id}/quote`,
    getAPiHeaders()
  );

  return await unWrapData(data);
};
