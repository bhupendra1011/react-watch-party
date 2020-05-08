import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

function SearchBar({ onFormSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(searchTerm);
  };

  return (
    <Paper elevation={6} style={{ padding: "24px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Search"
          fullWidth
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </Paper>
  );
}

export default SearchBar;
