import React from "react";

const Footer = ({ className }) => {
  return (
    <footer
      className={
        className === "root"
          ? "card-footer text-center bg-transparent fixed-bottom"
          : "card-footer text-center bg-transparent"
      }
    >
      <small className="text-muted">&copy;DABJ M SOLUTIONS LLC</small>
    </footer>
  );
};

export default Footer;
