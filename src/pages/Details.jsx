/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import BookingForm from "../components/BookingForm";
import Toast from "../components/Toast";
import Loader from "../components/Loader";

const Details = () => {
  const [show, setShow] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [successOpen, setIsSuccessOpen] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        console.log(res.data);
        setShow(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchShow();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  if (!show) {
    return (
      <div className="h-full">
        <Loader />{" "}
      </div>
    );
  }

  return (
    <>
      <div className="bg-white container w-11/12 mt-28 rounded-3xl text-primary py-6 px-8">
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-5 lg:col-span-2">
            {show.image ? (
              <img
                src={show.image.original}
                alt="image"
                className="rounded-3xl md:h-[500px]"
              />
            ) : (
              <img
                src="https://image.tmdb.org/t/p/original/ikBCRgIfmnmpwGHOlRhIO9MFfmc.jpg"
                alt="image"
                className="rounded-3xl md:h-[500px]"
              />
            )}
          </div>
          <div className="col-span-5 lg:col-span-3 ">
            <div className="text-4xl font-semibold flex flex-row items-center gap-2">
              <h1>{show.name}</h1>
              <a href={show.officialSite}>
                <ArrowTopRightOnSquareIcon className="w-6 h-6" />
              </a>
            </div>
            <div className="text-gray-500 mt-1">
              {show.genres.map((item, index) => (
                <span key={index}>{(index ? ", " : "") + item}</span>
              ))}
            </div>
            <div className="flex flex-row gap-2 items-center mt-4">
              <StarIcon className="w-7 h-7 text-orange-600" />
              <p className="font-medium text-lg">
                {show.rating.average ? show.rating.average : "8"} / 10
              </p>
            </div>
            <div className="text-lg mt-4 font-medium">
              {formatDate(show.premiered)}
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: show.summary }}
              className="mt-4 text-gray-600"
            ></div>
            <div className="grid grid-cols-3 mt-4 font-medium w-full md:w-1/2 gap-2">
              <div>
                <div>Status</div>
                <div>Average runtime: </div>
                <div>Network: </div>
                <div>Schedule: </div>
              </div>
              <div className="font-semibold col-span-2 px-2">
                <div>{show.status}</div>
                <div>{show.averageRuntime} mins</div>
                <div>
                  <a href={show.network.officialSite}>{show.network.name}</a>{" "}
                </div>
                <div>
                  {show.schedule.time}{" "}
                  {show.schedule.days.map((item, index) => (
                    <span key={index}>{(index ? ", " : "") + item}</span>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center gap-2 w-[300px] mt-8 text-xl font-bold text-a bg-primary text-secondary p-1 rounded-full p-4"
            >
              <p>Book</p>
            </button>
          </div>
        </div>
      </div>
      <BookingForm
        open={isOpen}
        setOpen={setIsOpen}
        show={show}
        setIsSuccessOpen={setIsSuccessOpen}
      />
      <Toast show={successOpen} setShow={setIsSuccessOpen} />
    </>
  );
};

export default Details;
