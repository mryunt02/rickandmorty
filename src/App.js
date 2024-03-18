import "./App.css";
import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";
import EpisodeDetail from "./components/EpisodeDetail";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, [page]);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
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
          <Route path="/episode/:id" element={<EpisodeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
