import { Container } from "@mui/material";
import React from "react";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Container>
        <Hero />
        <Projects />
      </Container>
    </div>
  );
};

export default Home;
