import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory} `).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Container>
      {videos.map(function (video, i) {
        return <Card video={video} key={i} />;
      })}
    </Container>
  );
};

export default Home;
