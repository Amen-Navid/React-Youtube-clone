import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { CssBaseline, Grid } from "@material-ui/core";
import VideoPage from "./Components/VideoPage";
import TopNav from "./Components/TopNav";
import SearchFeed from "./Components/SearchFeed";
import Shorts from "./Components/Shorts";
import BrowseChannels from "./Components/BrowseChannels";
import "./Components/Style.css";

const App = () => {
  const apiKey = "AIzaSyA4sVtnrzYUaUFAwBxabyHEakC5LASQpBM";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const searchVideos = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${searchTerm}&maxResults=20&type=video`
      );
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const handleSearch = async (searchTerm) => {
    const results = await searchVideos(searchTerm);
    setSearchResults(results);

    localStorage.setItem("searchQuery", searchTerm);
    localStorage.setItem("searchResults", JSON.stringify(results));
  };

  useEffect(() => {
    const storedSearchQuery = localStorage.getItem("searchQuery");
    const storedSearchResults = localStorage.getItem("searchResults");

    if (storedSearchQuery && storedSearchResults) {
      setSearchResults(JSON.parse(storedSearchResults));
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <CssBaseline />
      <Header toggleSidebar={toggleSidebar} onSearch={handleSearch} />
      <Grid
        container
        spacing={3}
        className={`app ${isSidebarOpen ? "sidebar-open" : ""}`}
      >
        <Grid item xs={12} md={2}>
          <Sidebar isOpen={isSidebarOpen} />
        </Grid>
        <Grid
          item
          xs={12}
          md={10}
          className={`main-content ${isSidebarOpen ? "sidebar-open" : ""}`}
        >
          <TopNav />
          <Routes>
            <Route path="/" element={<VideoPage />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route
              path="/Channels"
              element={<BrowseChannels apiKey={apiKey} />}
            />
            <Route
              path="/search"
              element={<SearchFeed searchResults={searchResults} />}
            />
          </Routes>
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;
