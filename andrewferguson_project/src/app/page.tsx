import './common_ui/info-card/info-card';
import InfoCard from './common_ui/info-card/info-card';

import styles from './page.module.css';

export default function Welcome() {
  const movieDesc = "Impress your friends at trivia night by memorizing all the movies and quotes from each trilogy.";
  const charactersDesc = "Delve into the minds and words of your favorite characters from the Lord of the Rings trilogy."
  const quoteDesc = "Explore a vast collection of memorable quotes from the Lord of the Rings movies.";
  return (
    <main className={styles.main} >

        <section className={styles.hero}>

          <h2>Learn about Lord of the Rings</h2>

          <div className={styles.inforow}>
            <InfoCard linkRoute={'movies'} infoTitle="Movies" imageSrc="/lotr-movies.png" infoDesc={movieDesc} ></InfoCard>

            <InfoCard linkRoute={'characters'} infoTitle="Characters" imageSrc="/lotr-characters.jpeg" infoDesc={charactersDesc}></InfoCard>

            <InfoCard linkRoute={'quotes'} infoTitle="Quotes" imageSrc="/lotr-quotes.jpeg" infoDesc={quoteDesc}></InfoCard>
          </div>
        </section>

    </main>
  )
}
