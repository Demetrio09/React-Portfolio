import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";

const About = (props) => {
  return (
    <React.Fragment>
      <Header {...props} />
      <main className="col-12 col-md-9 col-xl-10 py-md-3 pl-md-5 bd-content">
        <div className="card border-light mb-3">
          <div className="card-header">
            <h2>Demetrio Almeida Barroso Jr</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <img
                src="https://lh3.googleusercontent.com/iKwPRw4heMWR127eMwFqWbRrivIWZNi59IZoKHNM1wpRqL04gvLFmrsTSWAOTcd2W27ugWC12POliQqAr9o675FulyV_rRizqX3UFoGHjPk5zJXIhJxY1tn8JoRfPDXpytMnjBL6FOv4OeLIO1NETIwQYHQ7OszrtFOk0ekMnjXVGfm5KJEWYvidszXQqP8p9yPl-DsbpAunAdqvGc1g8D1VK88dRLHcYmaqwlNy-ILTXmBouUp_X8Da-7lAbqFheY-Io1Nl3Vt18as4nbqbdjpW_7m6HyXYZI01Sg2sPrRTkJdEfYiRhbt4Biv9iI2VpjIjhz-4WYdiPRkp7AAd87y8u10pYPB3jcChonHBkn_mpeWRAtV5TuSEngEKboqRZjwxua6NvWKBrg-iOvyLAhkPMrlGaYd8yVQRoupBgBI-cydPpnUK_D6ZfjMeh1G4xKuzOA8tlw506VtMvyr6tzNIJf7ROUAYefoYeNIDWr8RV1U5MAEnjIvCf9QWkBUenXBh-WoWZ67uOqRuBTNVN_ETh21eWMc1lB2vEkrmjzy5D5WP1eDmHCPy6LFep52RqwiNvMXNcRCBDbCp_0xn3eWtmIS0XOiB0LDal1x8ISLnWEfUi8DttftBOy7niXv8JxxZlpNIQQStitYsjBADkBklyqKDF54AtlvLC4gJetj8z7pI1FmkXnO7Jumn6OI=w364-h747-no"
                className="align-self-center mr-3"
                alt="Demetrio Almeida Barroso"
              />
              <div className="media-body">
                <p className="mt-0">
                  With thirty-three years old originally from Brazil, moved to
                  Orlando-FL in 2015 where I am currently living.
                  <br />
                  Bilingual Portuguese/English/Spanish, detailed oriented,
                  self-motivated Front-End Developer with a Certificate in
                  Full-Stack Web Development from the University of Central
                  Florida. Background in the services industries with a vast
                  customer service experience.
                  <br />
                  Skills include HTML, CSS, JavaScript, React.js. Interested in
                  leveraging skills and experience to build better experiences
                  on the web.
                </p>
              </div>
            </div>
            <p className="card-text">
              <small className="text-muted">Last updated 3 days ago</small>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default About;
