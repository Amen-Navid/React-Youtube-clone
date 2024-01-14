import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Style.css";

const VideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPageToken, setNextPageToken] = useState(null);
  const containerRef = useRef();

  useEffect(() => {
    const fetchVideos = async () => {
      const apiKey = "AIzaSyA4sVtnrzYUaUFAwBxabyHEakC5LASQpBM";
      const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=NG&maxResults=6&key=${apiKey}`;

      try {
        const response = await axios.get(apiUrl);
        if (response.data && response.data.items) {
          setVideos(response.data.items);
          setNextPageToken(response.data.nextPageToken);
        } else {
          {
            console.error({ loading });
          }
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const fetchMoreVideos = async () => {
    if (nextPageToken) {
      const apiKey = "AIzaSyA4sVtnrzYUaUFAwBxabyHEakC5LASQpBM";
      const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=NG&maxResults=10&pageToken=${nextPageToken}&key=${apiKey}`;

      try {
        const response = await axios.get(apiUrl);
        setVideos((prevVideos) => [...prevVideos, ...response.data.items]);
        setNextPageToken(response.data.nextPageToken);
      } catch (error) {
        console.error("Error fetching more videos:", error);
      }
    }
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        fetchMoreVideos();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, fetchMoreVideos]);

  const formatViews = (viewCount) => {
    if (viewCount >= 1e6) {
      return `${(viewCount / 1e6).toFixed(1)}M views`;
    } else if (viewCount >= 1e3) {
      return `${(viewCount / 1e3).toFixed(1)}K views`;
    } else {
      return `${viewCount} views`;
    }
  };

  const formatPublishDate = (publishDate) => {
    const currentDate = new Date();
    const videoDate = new Date(publishDate);
    const yearDifference = currentDate.getFullYear() - videoDate.getFullYear();

    if (yearDifference > 1) {
      return `${yearDifference} ${yearDifference === 1 ? "year" : "years"} ago`;
    } else {
      const monthDifference = currentDate.getMonth() - videoDate.getMonth();
      if (monthDifference > 0) {
        return `${monthDifference} ${
          monthDifference === 1 ? "month" : "months"
        } ago`;
      } else {
        const dayDifference = currentDate.getDate() - videoDate.getDate();
        return `${dayDifference} ${dayDifference === 1 ? "day" : "days"} ago`;
      }
    }
  };

  return (
    <div>
      <div className="videos-page">
        {videos.map((video) => (
          <div key={video.id}>
            <iframe
              width="330"
              height="180"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
              className="video-container"
            >
              {" "}
            </iframe>
            <h4 style={{ width: "320px" }}>{video.snippet.title}</h4>
            <p>{video.snippet.channelTitle}</p>

            <p>
              {" "}
              {formatViews(video.statistics.viewCount)}.
              {formatPublishDate(video.snippet.publishedAt)}
            </p>
          </div>
        ))}
        <div ref={containerRef} style={{ height: "10px" }}></div>
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default VideoPage;
