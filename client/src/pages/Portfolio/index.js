import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Portfolio = (props) => {
  return (
    <React.Fragment>
      <Header {...props} />
      <main className="col-12 col-md-12 col-xl-12 py-md-3 pl-md-5 bd-content">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col mb-4">
            <div className="card">
              <img
                width="150px"
                height="250px"
                src="https://i.pcmag.com/imagery/articles/04Uac9ZA9dH1zEKUiIv0nOu-7.fit_scale.size_2698x1517.v1569489914.jpg"
                className="card-img-top"
                alt="password generator"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    href="https://demetrio09.github.io/passwordgenerator/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Password Gerenator
                  </a>
                </h5>
                <p className="card-text">
                  Strong Password Generator to create secure passwords that are
                  impossible to crack on your device without sending them across
                  the Internet.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                width="150px"
                height="250px"
                src="https://d2ydtwisqcxv72.cloudfront.net/gcalplanningheader.jpg"
                className="card-img-top"
                alt="Work Day Scheduler"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    href="https://demetrio09.github.io/Homework5/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Work Day Scheduler
                  </a>
                </h5>
                <p className="card-text">
                  The Work Day Scheduler application is a calendar that allows
                  the user to save events for each hour of the day.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                width="150px"
                height="250px"
                src={require("../../assets/img/Screen Shot 2020-05-09 at 10.26.09 AM.jpg")}
                className="card-img-top"
                alt="media"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    href="https://demetrio09.github.io/Project-1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The classNameic Genius
                  </a>
                </h5>
                <p className="card-text">
                  A research app to help users collect scholar research articles
                  from all over the world, and give user an option to enhance
                  their study with classNameical music. Moreover, if the user
                  enjoy what they are hearing, there are links to lead user to a
                  music library with more information on the artist and song
                  playing.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                width="150px"
                height="250px"
                src={require("../../assets/img/Eat-DA-Burger.jpg")}
                className="card-img-top"
                alt="burger app"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    href="https://rocky-gorge-43164.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Eat Da Burger App
                  </a>
                </h5>
                <p className="card-text">
                  Building a burger logger with MySQL, Node, Express, Handlebars
                  and a homemade ORM (yum!).
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                width="150px"
                height="250px"
                src={require("../../assets/img/Screen Shot 2020-07-11 at 10.50.23 AM.png")}
                className="card-img-top"
                alt="mobile apps"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    href="https://tranquil-dusk-03353.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HotScreen
                  </a>
                </h5>
                <p className="card-text">
                  A full-stack application with Express, MySQL and Handlebars.
                  We provide the user with a huge collection of movie
                  information including credits, production info, links to
                  reviews, and much more. As you are looking around make sure to
                  curate your own unique list of movies with our easily
                  customizable interface. Your personalized movie library is a
                  just a few clicks away!
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src={require("../../assets/img/corona_rating_app.png")}
                className="card-img-top"
                alt="corona rating"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    href="https://calm-tundra-39023.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Corona Rating App
                  </a>
                </h5>
                <p className="card-text">
                  A full-stack application build using ReactJs, MySQL, Express,
                  Passport autentication. We provide the user an App that allows
                  view, write, and delete reviews of businesses by using the
                  Google API as a location finder. The Corona Rating App
                  includes filters to specify social distancing guidelines!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Portfolio;
