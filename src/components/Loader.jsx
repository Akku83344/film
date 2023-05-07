import ClapperBoard from "../assets/clapperboard.svg"

const Loader = () => {
  return (
    <div className="h-full flex items-center justify-center animate-blink">
      <img src={ClapperBoard} alt="asa" className="w-44"/>
    </div>
  );
};

export default Loader;
