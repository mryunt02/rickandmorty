import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EpisodeDetail() {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((response) => response.json())
      .then((data) => setEpisode(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return episode ? (
    <div>
      <h1>{episode.name}</h1>
      {/* Display other episode details as needed */}
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default EpisodeDetail;
