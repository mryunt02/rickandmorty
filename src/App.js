import "./App.css";
import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = useState("");

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${search}&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, [page, search]);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/rickandmorty"
            element={
              <>
                <input
                  type="search"
                  placeholder="Search characters"
                  value={search}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.match(/^[a-zA-Z]*$/)) {
                      setSearch(value);
                    }
                  }}
                  style={{ alignSelf: "center" }}
                />
                <Characters characters={characters} />
                <Stack spacing={2} style={{ background: "rgb(39, 43, 51)" }}>
                  <Pagination
                    count={41}
                    page={page}
                    onChange={handleChange}
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      background: "rgb(39, 43, 51)",
                      marginTop: "20px",
                      color: "white",
                    }}
                  />
                </Stack>
              </>
            }
          />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
