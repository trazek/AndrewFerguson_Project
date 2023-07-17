"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { useSelectedLayoutSegment } from "next/navigation";

interface AppBarProps {
  title?: string;
}

export default function LoTRAppBar(props: AppBarProps) {
  const activeSegment = useSelectedLayoutSegment();

  const title = activeSegment
    ? `${activeSegment?.charAt(0).toUpperCase()}${activeSegment?.slice(1)}`
    : "Lord of the Rings Trivia";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
