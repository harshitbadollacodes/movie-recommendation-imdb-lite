import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const moviesDB = [
    {
      name: "Rush Hour",
      imdb: "7 / 10",
      rottenTomatoes: "61%",
      genre: "Comedy",
      photoURL:
        "https://m.media-amazon.com/images/M/MV5BYWM2NDZmYmYtNzlmZC00M2MyLWJmOGUtMjhiYmQ2OGU1YTE1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Interstellar",
      imdb: "8.6 / 10",
      rottenTomatoes: "72%",
      genre: "Sci-fi",
      photoURL:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Avengers: Endgame",
      imdb: "8.4 / 10",
      rottenTomatoes: "94%",
      genre: "Sci-fi",
      photoURL:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Ted",
      imdb: "6.9 / 10",
      rottenTomatoes: "69%",
      genre: "Comedy",
      photoURL:
        "https://m.media-amazon.com/images/M/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "Wolf Of Wall Street",
      imdb: "8.2 / 10",
      rottenTomatoes: "80%",
      genre: "Business",
      photoURL:
        "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    },
    {
      name: "The Intern",
      imdb: "7.1 / 10",
      rottenTomatoes: "60%",
      genre: "Business",
      photoURL:
        "https://m.media-amazon.com/images/M/MV5BMTUyNjE5NjI5OF5BMl5BanBnXkFtZTgwNzYzMzU3NjE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    }
  ];

  const genreList = ["All Genres"];

  moviesDB.forEach((movie) => {
    if (!genreList.includes(movie.genre)) {
      genreList.push(movie.genre);
    }
  });

  const [genre, setGenre] = useState("All Genres");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">IMDb Lite</h1>
        <div className="quote noselect">
          <h2> " I didn't go to film school, I went to films!! "</h2>
          <h3 className="left-align"> - Quentin Tarantino</h3>
        </div>

        <div>
          {genreList.map((genre) => {
            return (
              <button
                className="btn"
                onClick={() => genreClickHandler(genre)}
                key={genre}
              >
                {genre}
              </button>
            );
          })}
        </div>

        <div className="displayMovie"> </div>

        {moviesDB.map((movie) => {
          if (genre === "All Genres") {
            return (
              <div className="movieDiv" key={movie.name}>
                <img src={movie.photoURL} alt="movie poster" />
                <div>
                  <p> {movie.name} </p>
                  <p> IMDB {movie.imdb} </p>
                  <p> Rotten Tomatoes {movie.rottenTomatoes} </p>
                </div>
              </div>
            );
          } else if (movie.genre.includes(genre)) {
            return (
              <div className="movieDiv" key={movie.name}>
                <img src={movie.photoURL} alt="movie poster" />
                <div>
                  <p> {movie.name} </p>
                  <p> IMDB: {movie.imdb} </p>
                  <p> Rotten Tomatoes {movie.rottenTomatoes} </p>
                </div>
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>
    </div>
  );
}
