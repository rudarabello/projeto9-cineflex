
import "./movieCover.css";
import { Link } from "react-router-dom";

export default function MovieCover({ cover, id }) {
  return (
    <div className="movie-cover">
      <Link to={`/sessions/${id}`}>
        <img src={cover} alt="" />
      </Link>
    </div>
  );
}