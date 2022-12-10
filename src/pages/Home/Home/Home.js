import { Container } from "@mui/material";
import React from "react";
import ContactForm from "../../../components/ContactForm/ContactForm";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Container>
        <Hero />
        <Projects />
        <ContactForm />
      </Container>
    </div>
  );
};

export default Home;
