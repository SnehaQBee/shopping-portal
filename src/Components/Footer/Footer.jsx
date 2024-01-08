import React from "react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h3>Wand Shop      |        E-Commerce Project</h3>
      <p>
        &copy; <span>{year}</span> WandShop.com -  All   Rights   Reserved   To  {" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sneha-qb/"
        >
              Sneha Biswas
        </a>
      </p>
    </footer>
  );
}