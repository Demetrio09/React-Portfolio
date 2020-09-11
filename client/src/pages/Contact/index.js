import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import emailjs from "emailjs-com";
import "./style.css";

const Contact = (props) => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ge7navp",
        "portfolio-contact-from",
        e.target,
        "user_iemhh2eU1eKbJMbU46Z1I"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <React.Fragment>
      <Header {...props} />
      <main className="col-12 col-md-9 col-xl-12 py-md-3 pl-md-5 bd-content">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col-md-6 offset-md-3">
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="from_name"
                  placeholder="Full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="from_email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Subject</label>
                <input type="text" className="form-control" name="subject" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="3"
                ></textarea>
              </div>
              <input
                type="submit"
                className="btn btn-primary"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
