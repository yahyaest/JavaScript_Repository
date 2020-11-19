import React from "react";

const GenreList = (props) => {
  const {
    genres,
    textProperty,
    valueProperty,
    currentGenre,
    onGenreChange,
  } = props;
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre[valueProperty]}
          className={
            genre === currentGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onGenreChange(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

GenreList.defaultProps = {
  textProperty: "name",
  valueProperty: "_id", 
};

export default GenreList;
