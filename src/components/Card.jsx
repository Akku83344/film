/* eslint-disable react/prop-types */
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const { name, rating, image, genres, premiered, summary, id } = movie;

  return (
    <div className="py-3 sm:max-w-xl sm:mx-auto">
      <div className="bg-white shadow-lg border-gray-100 max-h-80	 border rounded-3xl p-8 flex space-x-8">
        <div className="max-h-[200px] overflow-visible w-1/2">
          {image ? (
            <img
              className="rounded-3xl shadow-lg max-h-[350px] w-full"
              src={
                image.medium
              }
              alt=""
            />
          ) : (
            <img
              className="rounded-3xl shadow-lg max-h-[320px] w-full"
              src={
                "https://image.tmdb.org/t/p/original/ikBCRgIfmnmpwGHOlRhIO9MFfmc.jpg"
              }
              alt=""
            />
          )}
        </div>
        <div className="flex flex-col w-1/2 space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold">{name}</h2>
            <div className="bg-yellow-400 font-bold rounded-xl p-2">
              {rating.average || "8.6"}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-400">
              {genres.map((item, index) => (
                <span key={index}>{(index ? ", " : "") + item}</span>
              ))}
            </div>
            <div className="text-lg text-gray-800">
              {premiered ? premiered.slice(0, 4) : "2022"}
            </div>
          </div>
          <p
            className=" text-gray-400 max-h-40 overflow-y-hidden line-clamp-3"
            dangerouslySetInnerHTML={{ __html: summary }}
          ></p>
          <Link to={`/details/${id}`} className="flex items-center gap-2 w-fit text-xl font-bold text-a bg-primary text-secondary p-1 rounded-full px-4">
            <p>Details</p>
            <ArrowRightIcon className="w-6 h-6"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
