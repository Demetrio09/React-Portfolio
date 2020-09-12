import React from "react";
import Header from "../../components/Header";
import Card from "../../components/PortfolioCard";
import Footer from "../../components/Footer";

const Portfolio = (props) => {
  return (
    <React.Fragment>
      <Header {...props} />
      <Card />
      <Footer />
    </React.Fragment>
  );
};

export default Portfolio;
