import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";

const Home = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      console.log(res.data);
      setMovies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!movies) {
    return (
      <div className="h-full">
        <Loader />
      </div>
    );
  }

  return (
    <div className="container w-11/12 mt-28 pb-24">
      <div className="flex flex-row flex-wrap gap-[70px]">
        {movies &&
          movies.map((item) => (
            <Card key={item.show.id} movie={item.show}>
              {item}
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Home;
