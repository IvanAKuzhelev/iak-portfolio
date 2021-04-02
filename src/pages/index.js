import * as React from "react";
import { useRef } from "react";
import "@fontsource/fira-code";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Projects from "../components/projectsSection/Projects";
import Contact from "../components/contact/Contact";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.svg";

const IndexPage = () => {
  const scrollTarget = useRef(null);
  return (
    <>
      <Helmet>
        <title>Ivan A. Kuzhelev - JS Dev</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
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
