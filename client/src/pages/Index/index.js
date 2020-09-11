import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Main = (props) => {
  return (
    <React.Fragment>
      <Header {...props} />
      <main className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 offset-3 main">
            <h1 className="display-4">Demetrio Almeida</h1>
            <p className="lead">Front-End Developer</p>
          </div>
        </div>
      </main>
      <Footer className="root" />
    </React.Fragment>
  );
};

export default Main;
