import Layout from '../common_ui/layouts/display-layout/layout';
import styles from './quotes.module.css';

import { getQuotes, getCharacters } from '../utils/api';

export default async function Quotes() {

  let [quotes, characters] = await Promise.all([getQuotes(), getCharacters('?limit=1000')]);

  return (
    <Layout> 
      {quotes.length > 0 ? quotes.map((quote, index) => {
        return ( 
          <div key={index} className={styles.quote}> 
              <q>{quote.dialog} - {matchQuoteWithCharacterById(characters, '_id', quote.character)}</q>
          </div> 
        );
      }) : ("There was a problem retrieving the quotes. Please refresh and try again.")
    }
   </Layout>
  );
}

function matchQuoteWithCharacterById(arr: any, key: any, value: any) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return arr[i].name;
    }
  }
  return 'Unknown';
}