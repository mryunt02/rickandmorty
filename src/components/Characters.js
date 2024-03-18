import React from "react";
import { Link } from "react-router-dom";
import "./Characters.css";

function Characters({ characters }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "rgb(39, 43, 51)",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          background: "rgb(39, 43, 51)",
          justifyContent: "center",
        }}
      >
        {characters &&
          characters.map((character) => (
            <>
              <div>
                <div
                  style={{
                    marginRight: "auto",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "20px",
                  }}
                >
                  <ul
                    style={{
                      borderRadius: "20px",
                      padding: "0px 0px 0px 0px",
                      margin: "20px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "0",
                      background: "rgb(60, 62, 68)",
                    }}
                  >
                    <Link
                      to={`/character/${character.id}`}
                      style={{
                        borderRadius: "20px 0px 0px 20px",

                        alignSelf: "flex-start",
                        width: "230px",
                        height: "230px",
                      }}
                    >
                      <img
                        src={character.image}
                        alt=""
                        style={{
                          borderRadius: "20px 0px 0px 20px",

                          alignSelf: "flex-start",
                          width: "230px",
                        }}
                      />
                    </Link>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: "flex-start",
                        marginLeft: "10px",
                        width: "230px",
                        height: "230px",
                      }}
                    >
                      <h2
                        key={character.id}
                        style={{ color: "#F5F5F5", marginTop: 0 }}
                        className="htags"
                      >
                        {character.name}
                      </h2>
                      {character.status === "Alive" ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            marginTop: "-36px",
                          }}
                        >
                          <div
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              backgroundColor: "green",
                            }}
                          ></div>
                          <p className="paragraf" style={{ color: "#FFFFFF" }}>
                            {character.status}-{character.species}
                          </p>
                        </div>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            marginTop: "-36px",
                          }}
                        >
                          <div
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              backgroundColor: "red",
                            }}
                          ></div>
                          <p className="paragraf" style={{ color: "#FFFFFF" }}>
                            {character.status}-{character.species}
                          </p>
                        </div>
                      )}
                      <p style={{ color: "#FFFFFF" }}>
                        <p
                          className="newp"
                          style={{
                            color: "rgb(158, 158, 158)",
                            marginTop: "-23px",
                          }}
                        >
                          Origin:
                        </p>{" "}
                        <p className="paragraf" style={{ marginTop: "-15px" }}>
                          {character.origin.name}
                        </p>
                      </p>
                      <p style={{ color: "#FFFFFF", marginTop: "3px" }}>
                        <p
                          className="newp"
                          style={{
                            color: "rgb(158, 158, 158)",
                            marginTop: "-30px",
                          }}
                        >
                          Location:
                        </p>{" "}
                        <p className="paragraf" style={{ marginTop: "-15px" }}>
                          {character.location.name}
                        </p>
                      </p>
                      <Link
                        to={`/character/${character.id}`}
                        style={{
                          color: "white",
                          textDecoration: "none",
                          marginTop: 0,
                        }}
                      >
                        <h3
                          className="newp"
                          style={{ marginTop: -10, fontWeight: 300 }}
                        >
                          Details...
                        </h3>
                      </Link>
                    </div>
                  </ul>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}

export default Characters;
