"use client";

import { Character } from "@/lib/api.types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Badge,
  Category,
  Height,
  Wc,
  Cake,
  Church,
  EventBusy,
  Landscape,
  Palette,
  OpenInNew,
} from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from "@mui/material/Paper";

const showData = (data: string) => (!data ? "??" : data);

export default function LoTRCharacterOne({
  character,
}: {
  character: Character;
}) {
  const matches = useMediaQuery("(min-width:1024px)");

  return (
    <Paper
      style={{
        flex: "0 0 25%",
        padding: "16px",
        display: matches ? "block" : "none",
      }}
      elevation={3}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <Badge />
          </ListItemIcon>
          <ListItemText primary={showData(character?.name)} secondary="Name" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Height />
          </ListItemIcon>
          <ListItemText
            primary={showData(character?.height)}
            secondary="Height"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Category />
          </ListItemIcon>
          <ListItemText primary={showData(character?.race)} secondary="Race" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Wc />
          </ListItemIcon>
          <ListItemText
            primary={showData(character?.gender)}
            secondary="Gender"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Cake />
          </ListItemIcon>
          <ListItemText
            primary={showData(character?.birth)}
            secondary="Birth"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Church />
          </ListItemIcon>
          <ListItemText
            primary={showData(character?.spouse)}
            secondary="Spouse"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EventBusy />
          </ListItemIcon>
          <ListItemText
            primary={showData(character?.death)}
            secondary="Death"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Landscape />
          </ListItemIcon>
          <ListItemText
            primary={showData(character?.realm)}
            secondary="Realm"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Palette />
          </ListItemIcon>
          <ListItemText primary={showData(character?.hair)} secondary="Hair" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <OpenInNew />
          </ListItemIcon>
          <ListItemText
            primary={
              <>
                {showData(character?.wikiUrl) === "??" ? (
                  "??"
                ) : (
                  <a target="_blank" href={character?.wikiUrl}>
                    {character?.wikiUrl}
                  </a>
                )}
              </>
            }
            secondary="Wiki"
          />
        </ListItem>
      </List>
    </Paper>
  );
}
