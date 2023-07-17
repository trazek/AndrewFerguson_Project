"use client";

import Box from "@mui/material/Box";

import Breadcrumbs from "@mui/material/Breadcrumbs";

import Link from "next/link";

export default function LoTRBreadCrumbsBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link color="inherit" href="/">
          Core
        </Link>
      </Breadcrumbs>
    </Box>
  );
}
