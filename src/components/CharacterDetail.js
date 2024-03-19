import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import home from "./seeb9rh583a71-removebg-preview.png";

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
      <Link to="/" style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={home}
          alt="home"
          style={{
            width: "200px",
            height: "150px",
            marginRight: "20px",
            padding: "20px",
            margin: "20px",
          }}
        />
      </Link>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexFlow: "wrap",

          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <div style={{ marginLeft: "20px" }}>
          <img
            src={character.image}
            alt={character.name}
            style={{ borderRadius: "20px 20px 20px 20px" }}
          />
        </div>
        <div style={{ flex: 1, maxWidth: "600px" }}>
          <div>
            <ul
              style={{
                border: "1px solid rgb(159 187 255)",
                borderRadius: "20px",
                padding: "20px",
                margin: "0px 20px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1
                className="htags"
                style={{
                  color: "#FFFFFF",
                  textAlign: "left",
                  marginRight: "auto",
                  marginBottom: "-11px", // Reduce margin bottom here
                  marginTop: -16,
                }}
              >
                {character.name}
              </h1>
              <h2
                className="htags"
                style={{
                  color: "#FFFFFF",
                  textAlign: "left",
                  marginRight: "auto",
                  marginBottom: "-38px", // Reduce margin bottom here
                  marginTop: "0",
                  fontSize: "20px",
                }}
              >
                <p
                  className="newp"
                  style={{
                    marginBottom: "0",
                    fontWeight: 300,
                    color: "rgb(158, 158, 158)",
                  }}
                >
                  Status:
                </p>
                <span
                  style={{
                    color: character.status === "Alive" ? "green" : "red",
                    marginLeft: "0",
                    fontSize: "30px",
                    verticalAlign: "middle",
                    marginRight: "3px",
                  }}
                >
                  &bull;
                </span>
                {character.status}-{character.species}
              </h2>
              <h2
                className="htags"
                style={{
                  color: "#FFFFFF",
                  textAlign: "left",
                  marginRight: "auto",
                  marginBottom: "-14px", // Reduce margin bottom here
                  marginTop: "-px",
                  fontSize: "20px",
                }}
              >
                <p
                  className="newp"
                  style={{
                    marginBottom: "0",
                    fontWeight: 300,
                    color: "rgb(158, 158, 158)",
                  }}
                >
                  Gender:
                </p>{" "}
                {character.gender}
              </h2>
              <h2
                className="htags"
                style={{
                  color: "#FFFFFF",
                  textAlign: "left",
                  marginRight: "auto",
                  marginBottom: "-14px", // Reduce margin bottom here
                  marginTop: 0,
                  fontSize: "20px",
                }}
              >
                <p
                  className="newp"
                  style={{
                    marginBottom: "0",
                    fontWeight: 300,
                    color: "rgb(158, 158, 158)",
                  }}
                >
                  Origin:
                </p>{" "}
                {character.origin.name}
              </h2>
              <h2
                className="htags"
                style={{
                  color: "#FFFFFF",
                  textAlign: "left",
                  marginRight: "auto",
                  marginBottom: "5px", // Reduce margin bottom here
                  marginTop: 0,
                  fontSize: "20px",
                }}
              >
                <p
                  className="newp"
                  style={{
                    marginBottom: "0",
                    fontWeight: 300,
                    color: "rgb(158, 158, 158)",
                  }}
                >
                  Location:
                </p>{" "}
                {character.location.name}
              </h2>
            </ul>
          </div>
        </div>
      </div>

      <h2 style={{ marginTop: "50px", marginLeft: "20px" }}>Episodes:</h2>

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
              className="paragraf"
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
              className="paragraf"
              style={{
                border: "1px solid #FFFFFF",
                padding: "10px",
                background: "#25285D",
              }}
            >
              Name
            </th>
            <th
              className="paragraf"
              style={{
                border: "1px solid #FFFFFF",
                padding: "10px",
                background: "#25285D",
              }}
            >
              Air Date
            </th>
            <th
              className="paragraf"
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
                <p
                  className="newp"
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                >
                  {episode.id}
                </p>
              </td>
              <td
                className="paragraf"
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
                className="paragraf"
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
                className="paragraf"
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
      <Link to="/rickandmorty">Back to Home</Link>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default CharacterDetail;
