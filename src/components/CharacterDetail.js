import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
        return Promise.all(data.episode.map((url) => fetch(url)));
      })
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((episodesData) => setEpisodes(episodesData))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return character ? (
    <div style={{ background: "rgb(39, 43, 51)" }}>
      <h1 style={{ textAlign: "center" }}>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>{character.species}</p>
      <p>{character.type}</p>
      <p>{character.gender}</p>
      <p>{character.origin.name}</p>
      <p>{character.location.name}</p>
      <table
        style={{
          color: "#FFFFFF",
          borderCollapse: "collapse",
          marginLeft: "20px",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #FFFFFF",
                padding: "10px",
                width: "20px",
                background: "#25285D",
              }}
            >
              Episode No
            </th>
            <th
              style={{
                border: "1px solid #FFFFFF",
                padding: "10px",
                background: "#25285D",
              }}
            >
              Name
            </th>
            <th
              style={{
                border: "1px solid #FFFFFF",
                padding: "10px",
                background: "#25285D",
              }}
            >
              Air Date
            </th>
            <th
              style={{
                border: "1px solid #FFFFFF",
                padding: "10px",
                justifyContent: "left",
                background: "#25285D",
              }}
            >
              Season
            </th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode) => (
            <tr key={episode.id}>
              <td
                style={{
                  border: "1px solid #FFFFFF",
                  padding: "10px",
                  textAlign: "center",
                  background: "rgb(103 113 134)",
                }}
              >
                <Link
                  to={`/episode/${episode.id}`}
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                >
                  {episode.id}
                </Link>
              </td>
              <td
                style={{
                  borderBottom: "1px solid #FFFFFF",
                  borderRight: "1px solid #FFFFFF",
                  padding: "10px",
                  width: "200px",
                }}
              >
                {episode.name}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #FFFFFF",
                  borderRight: "1px solid #FFFFFF",
                  padding: "10px",
                  width: "200px",
                }}
              >
                {episode.air_date}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #FFFFFF",
                  borderRight: "1px solid #FFFFFF",
                  padding: "10px",
                }}
              >
                {episode.episode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">Back to Home</Link>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default CharacterDetail;
