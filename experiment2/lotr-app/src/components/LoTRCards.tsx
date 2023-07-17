"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import HomePageCard from "@/components/HomePageCard";

export default function LoTRCards() {
  return (
    <Container>
      <Grid
        style={{ marginTop: "64px" }}
        container
        spacing={2}
        justifyContent="center"
      >
        <Grid item xs={12} md={6} lg={4}>
          <HomePageCard
            cardTitle="Characters from the trilogies"
            cardSubtitle="Trivia about characters from the movies"
            imgSrc="/images/lotr-characters.jpeg"
            imgAlt="Lord of the Rings movies"
            cardHref="/characters"
          ></HomePageCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <HomePageCard
            cardTitle="Journey through the trilogies"
            cardSubtitle="Trivia about your favorite movie"
            imgSrc="/images/lotr-movies.png"
            imgAlt="Lord of the Rings characters"
            cardHref="/movies"
          ></HomePageCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <HomePageCard
            cardTitle="Memorable quotes"
            cardSubtitle="Popular quotes from the movies"
            imgSrc="/images/lotr-quotes.jpeg"
            imgAlt="Lord of the Rings quotes"
            cardHref="/quotes"
          ></HomePageCard>
        </Grid>
      </Grid>
    </Container>
  );
}
