import React from "react";

export const Movies = ({ movies }) => {
  console.log("movies length:::", movies.length);

  if (movies.length === 0) return null; // ถ้าไม่มีหนังให้แสดง ก็จะไม่แสดงอะไร

  // คอมโพเนนต์ MovieRow รับ props movie และ index
  const MovieRow = ({ movie, index }) => {
    return (
      <tr className={index % 2 === 0 ? "odd" : "even"}>
        <td>{index + 1}</td>
        <td>{movie.title}</td>
        <td>{movie.genre}</td>
        <td>{movie.director}</td>
        <td>{movie.release_year}</td>
      </tr>
    );
  };

  return (
    <div className="container">
      <h2>Movies</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Movie Id</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Director</th>
            <th>Release</th>
          </tr>
        </thead>
        <tbody>
          {/* ใช้ map เพื่อแสดง MovieRow */}
          {movies.map((movie, index) => (
            <MovieRow key={index} movie={movie} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
