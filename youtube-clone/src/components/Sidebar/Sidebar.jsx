import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../../utils/constants";

function Sidebar({ selectedCategory, setSelectedCategory }) {
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
        <button
          className="category-btn"
          key={i}
          onClick={() => setSelectedCategory(categori.name)}
          style={{
            background: categori.name === selectedCategory && "#FC1503",
            color: "white",
            borderRadius: "50px",
            border: "none",
          }}
        >
          <span
            style={{
              marginRight: "15px",
              color: categori.name === selectedCategory ? "white" : "red",
            }}
          >
            <categori.icon />
          </span>
          <span
            style={{ opacity: categori.name === selectedCategory ? 1 : 0.8 }}
          >
            {categori.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
