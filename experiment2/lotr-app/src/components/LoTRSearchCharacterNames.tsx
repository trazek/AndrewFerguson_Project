"use client";

import { InputAdornment, LinearProgress, TextField } from "@mui/material";
import FilterList from "@mui/icons-material/FilterList";

import { useEffect, useState } from "react";

export default function LoTRSearchCharacterNames({
  onInputChange,
}: {
  onInputChange: any;
}) {
  const DEBOUNCE_TIME = 700;

  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: any) => {
    const { value } = event.target;

    setIsLoading(true);
    setInputValue(value);
  };

  useEffect(() => {
    let timer: any;

    const emitEvent = async () => {
      const data = await fetch(`/api/characters?name=${inputValue}`);
      setIsLoading(false);
      onInputChange(await data.json());
    };

    const debounceInput = () => {
      clearTimeout(timer);
      timer = setTimeout(emitEvent, DEBOUNCE_TIME);
    };

    if (typeof inputValue !== "undefined" && inputValue !== null) {
      debounceInput();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <TextField
          id="non-floating-label"
          variant="outlined"
          size="small"
          autoComplete="off"
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FilterList />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <LinearProgress
        style={{ top: "5px", visibility: isLoading ? "visible" : "hidden" }}
      />
    </>
  );
}
