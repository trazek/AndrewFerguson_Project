"use client";

import { Card, CardContent, Typography, CardMedia, Paper } from "@mui/material";
import { useState } from "react";

import Link from "next/link";

interface HomePageProps {
  imgSrc?: string;
  imgAlt?: string;
  cardTitle: string;
  cardSubtitle?: string;
  cardHref?: string;
}

export default function HomePageCard(props: HomePageProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={props.cardHref || "/"} style={{ textDecoration: "none" }}>
      <Paper
        elevation={isHovered ? 4 : 0}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Card>
          <CardMedia
            sx={{ height: 180 }}
            image={props.imgSrc}
            title={props.imgAlt}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.cardTitle}
            </Typography>
            <Typography color="textSecondary">{props.cardSubtitle}</Typography>
          </CardContent>
        </Card>
      </Paper>
    </Link>
  );
}
