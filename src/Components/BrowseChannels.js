import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style.css";

const BrowseChannels = ({ apiKey }) => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels`,
          {
            params: {
              part: "snippet",
              maxResults: 30,
              key: apiKey,
            },
          }
        );

        setChannels(response.data.items);
      } catch (error) {
        console.error("Error fetching channels:", error);
      }
    };

    fetchChannels();
  }, [apiKey]);

  return (
    <div className="videos-page">
      <h2>Channels List</h2>
      <ul>
        {channels.map((channel) => (
          <li key={channel.id}>
            <img
              src={channel.snippet.thumbnails.default.url}
              alt={channel.snippet.title}
              className="video-container"
            />
            <p>{channel.snippet.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseChannels;
