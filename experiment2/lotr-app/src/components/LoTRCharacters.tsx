"use client";

import { useState } from "react";
import { FixedSizeList, ListChildComponentProps } from "react-window";

import Container from "@mui/material/Container";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FormatQuote from "@mui/icons-material/FormatQuote";

import LoTRSearchCharacterNames from "@/components/LoTRSearchCharacterNames";

import { Character } from "@/lib/api.types";

import Link from "next/link";
import ListItemAvatar from "@mui/material/ListItemAvatar/ListItemAvatar";
import QuestionMarkTwoToneIcon from "@mui/icons-material/QuestionMarkTwoTone";
import Avatar from "@mui/material/Avatar/Avatar";

const goToWiki = (wikiUrl: string) =>
  document.open(wikiUrl, "", "noopener=true");

const showData = (data: string) => (!data ? "??" : data);

export default function LoTRCharacters({
  characters,
}: {
  characters: [Character];
}) {
  const [characterArr, setCharacterArr] = useState(characters);

  const handleInputChange = (characterData: any) => {
    setCharacterArr(characterData);
  };

  const renderCharacterRow = (props: ListChildComponentProps) => {
    const { data, index, style } = props;

    const { _id, name, race, gender, wikiUrl } = data[index];

    return (
      <ListItem component="div" disablePadding key={_id} style={style}>
        <ListItemButton
          role={"link"}
          onClick={() => {
            goToWiki(wikiUrl);
          }}
          style={{ flexGrow: 0.95 }}
        >
          {wikiUrl ? (
            <ListItemText
              primary={
                <>
                  {name}&nbsp;
                  <OpenInNewIcon
                    sx={{ width: "16px", height: "16px" }}
                  ></OpenInNewIcon>
                </>
              }
              secondary={
                <>
                  {showData(race)} ({showData(gender)})
                </>
              }
              sx={{ color: "initial" }}
            />
          ) : (
            <ListItemText
              primary={name}
              secondary={
                <>
                  {showData(race)} ({showData(gender)})
                </>
              }
            />
          )}
        </ListItemButton>

        <IconButton edge="end" aria-label="comments">
          <Link
            href={`/characters/${_id}`}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <FormatQuote />
          </Link>
        </IconButton>
      </ListItem>
    );
  };

  return (
    <>
      <Container
        maxWidth="lg"
        style={{
          overflow: "hidden",
          backgroundColor: "white",
          paddingTop: "16px",
        }}
      >
        <LoTRSearchCharacterNames
          onInputChange={handleInputChange}
        ></LoTRSearchCharacterNames>

        <Divider style={{ paddingBottom: "4px" }}></Divider>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          height: "85vh",
          paddingTop: "16px",
          paddingBottom: "16px",
          backgroundColor: "white",
        }}
      >
        {characterArr.length <= 0 ? (
          <ListItem disablePadding>
            <ListItemAvatar>
              <Avatar>
                <QuestionMarkTwoToneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="No records found" />
          </ListItem>
        ) : (
          <FixedSizeList
            height={800}
            width={"95%"}
            itemSize={72}
            itemCount={characterArr.length}
            itemData={characterArr}
            style={{ margin: "auto" }}
          >
            {renderCharacterRow}
          </FixedSizeList>
        )}
      </Container>
    </>
  );
}
