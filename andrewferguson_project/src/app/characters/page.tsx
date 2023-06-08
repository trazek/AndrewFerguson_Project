import Layout from '../common_ui/layouts/display-layout/layout';
import styles from './characters.module.css';

import { getCharacters } from '../utils/api';

export default async function Characters() {
  
  const characters = await getCharacters();

  return (
    <Layout>
      {characters.map((character) => (
         <div key={character._id} className={styles.characterData}>
          <div className={styles.characterName}>
            <h3>{character.name}</h3>
          </div>

          <div className={styles.characterMetaData}>
            <p>Race: {character.race}</p>
            <p>Gender: {character.gender}</p>
            <a href={character.wikiUrl} target='_blank'>More info -&gt;</a>
          </div>
        </div>
        ))}
   </Layout>
  );
}
