"use client";
import { CharacterQuote } from "@/lib/api.types";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function LoTRQuotes({ quotes }: { quotes: [CharacterQuote] }) {
  return (
    <div style={{ flex: "1", overflowY: "auto", padding: "0 16px 16px 16px" }}>
      {quotes.length <= 0 ? (
        <Paper
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <span style={{ fontSize: "2rem" }}> No quotes found</span>
          </div>
        </Paper>
      ) : (
        <Stack spacing={2}>
          {quotes.map((quote) => {
            return (
              <Paper
                variant="outlined"
                style={{ padding: "8px", fontStyle: "italic" }}
                key={quote.id}
              >
                <FormatQuoteIcon
                  style={{ transform: "scaleX(-1)", color: "#575555" }}
                ></FormatQuoteIcon>
                {quote.dialog}{" "}
                <FormatQuoteIcon style={{ color: "#575555" }}></FormatQuoteIcon>
              </Paper>
            );
          })}
        </Stack>
      )}
    </div>
  );
}
