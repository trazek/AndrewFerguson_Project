import { LoTRCharacter, LoTRQuote, LoTRMovies } from '../types/types';

/*
  Since this API can return a lot of characters, and scrolling through hundreds of characters isn't fun,
  we will randomly select 10 characters to explore! Real LoTR fans will enjoy seeing different characters
  with each visit!
*/
export const getCharacters = async (filter: any = ''): Promise<LoTRCharacter[]> => {
    const url = `https://the-one-api.dev/v2/character${filter}`;
  
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer O6nSMbYpVHpO1XeB_LLn'
    }
  
    const res = await fetch(url, {
      headers,
      cache: 'no-cache'
    });
  
    const data = await res.json();
  
    const desired = 10;
    const length = data.total;
  
    // Get a random number within the total number of items returned
    let start = Math.floor(Math.random() * length) + 1;
  
    // Adjust the random number in case it's too close to the end
    start = ((length - start) < desired) ? start - desired : start;
  

    if ( filter !== '' ) {
        return data.docs;
    } else {
        // Return only the randomly selected characters
        return data.docs.slice(start, start + desired);;
    }
  }


  /*
  Since this API can return a lot of quotes, and scrolling through hundreds of characters isn't fun,
  we will randomly select 10 characters to explore! Real LoTR fans will enjoy seeing different characters
  with each visit!
*/
export async function getQuotes(): Promise<LoTRQuote[]> {
    const url = `https://the-one-api.dev/v2/quote?limit=2400`;
  
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer O6nSMbYpVHpO1XeB_LLn'
    };
  
    const res = await fetch(url, {
      headers,
      cache: 'no-cache'
    });
  
    const data = await res.json();
  
    const desired = 10;
    const length = data.limit - 1;
  
    // Get a random number within the total number of items returned
    let start = Math.floor(Math.random() * length) + 1;
  
    // Adjust the random number in case it's too close to the end
    start = ((length - start) < desired) ? start - desired : start;
  
    // Return only the randomly selected characters
    return data.docs.slice(start, start + 10);
  }
  
  
  
  export async function getMovies(): Promise<LoTRMovies[]> {
    const url = `https://the-one-api.dev/v2/movie`;
  
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer O6nSMbYpVHpO1XeB_LLn'
    }
  
    const res = await fetch(url, {
      headers,
      cache: 'no-cache'
    });
  
    const data = await res.json();
  
    return data.docs;
  }
  