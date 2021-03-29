import * as React from "react";
import { useRef } from "react";
import { Global, css } from "@emotion/react";
import "@fontsource/fira-code";
import Hero from "../components/Hero";
import Theme from "../components/Theme";
import Header from "../components/Header";
import scrlArrowUp from "../images/upScrl.svg";
import scrlArrowDown from "../images/downScrl.svg";
import Projects from "../components/projectsSection/Projects";
import Contact from "../components/contact/Contact";
import Layout from "../components/Layout";

const IndexPage = () => {
  const scrollTarget = useRef(null);
  return (
    <>
      <Layout>
        <Header />
        <Hero scrollTarget={scrollTarget} />
        <Projects scrollTarget={scrollTarget} />
        <Contact />
      </Layout>
    </>
  );
};

export default IndexPage;
