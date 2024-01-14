import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Style.css";

const Shorts = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      const apiKey = "AIzaSyA4sVtnrzYUaUFAwBxabyHEakC5LASQpBM";
      const apiUrl = `https://www.googleapis.com/youtube/v3/search`;

      try {
        const response = await axios.get(
          `${apiUrl}?part=snippet&type=video&chart=mostPopular&regionCode=NG&maxResults=10&q=shorts&key=${apiKey}`
        );
        if (response.data && response.data.items) {
          setVideos(response.data.items);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <div className="videos-page">
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <iframe
              width="320"
              height="180"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
              className="video-container"
            >
              {" "}
            </iframe>
            <h4 style={{ width: "320px" }}>{video.snippet.title}</h4>

            <p>{video.snippet.channelTitle}</p>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Shorts;
