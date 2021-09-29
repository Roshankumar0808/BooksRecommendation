import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  DSA: [
    { name: "Algorithms Unlocked", rating: "5/5" },
    { name: "Introduction to Algorithms", rating: "4.5/5" },
    { name: "The Algorithm Design Manual ", rating: "4/5" }
  ],

  CSS: [
    {
      name: " CSS Secrets",
      rating: "5/5"
    },
    {
      name: "CSS Pocket Reference",
      rating: "4.5/5"
    },
    {
      name: "CSS: The Missing Manual",
      rating: "4.5/5"
    }
  ],
  HTML: [
    {
      name: "HTML and CSS: Design and Build Websites – by Jon Duckett",
      rating: "5/5"
    },
    {
      name:
        " A Smarter Way to Learn HTML & CSS: Learn it faster. Remember it longer – by Mark Myers",
      rating: "4.5/5"
    },
    {
      name:
        "Get Coding!: Learn HTML, CSS & JavaScript & Build a Website, App & Game – by Young Rewired State",
      rating: "4/5"
    }
  ],
  REACT: [
    {
      name: " The Road to React-by Robin ",
      rating: "5/5"
    },
    {
      name: "React Explained: Your Step-by-Step Guide to React",
      rating: "4.5/5"
    },
    {
      name: "Learning React by Alex Banks",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("HTML");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 Bestbooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#6EE7B7",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                background: "#E0E7FF",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
