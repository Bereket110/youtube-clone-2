import React from "react";
import Stack from "@mui/material/Stack";

import { categories } from "../../utils/constants";

function Sidebar() {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((categori, i) => (
        <button key={i}>
          <span style={{ marginRight: "15px" }}>
            <categori.icon />
          </span>
          <span>{categori.name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
