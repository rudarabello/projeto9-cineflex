
import Header from "../../components/Header/Header";
import MovieCatalogue from "../../components/Moviecatalogue/MovieCatalogue";
import "./home.css";


export default function Home() {
  return (
    <div className="home">
      <Header />
      <MovieCatalogue />
    </div>
  );
}


