import { TiTick } from "react-icons/ti";

function AboutUs() {
  return (
    <div className="m-auto max-w-[2560px] p-3">
        <div div className="flex pt-20 flex-col md:flex-row items-start justify-center gap-2 p-4">
        
            <div className="flex flex-1  lg:justify-center">
                <div>
                    <img
                    className="h-[280px] w-full object-cover  "
                    src="https://tse2.mm.bing.net/th?id=OIP.dQK8eWiFPik7-lz3Z8YJ8gHaFH&pid=Api&P=0&h=180"
                    alt="img"
                    />
                </div>
            </div>

        <div className=" flex flex-1 flex-col "> 
          <h1 className="font-bold text-2xl md:text-4xl text-center text-white">
            FIND <span className="text-orange-500">FOOD AND DRINKS</span>, ALL-IN-
          </h1>
          <h1 className="pb-3 font-bold text-2xl md:text-4xl text-white text-center">
            ONE PLACE FOR YOUR <span className="text-orange-400">BEST TASTE</span>
          </h1>
          <p className="text-center font-bold text-1xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, repudiandae.
          </p>
          <p className="text-center font-bold text-1xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, repudiandae.
          </p>
          <p className="text-center font-bold text-1xl pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>

          <div className="grid md:grid-cols-2 items-center px-4 justify-center lg:items-center ">
            <h1 className="text-white font-medium text-[12px] md:text-[15px]">Best Place</h1>
            <h1 className="text-white font-medium text-[12px] md:text-[15px]">Fresh Ingredients</h1>
            <h1 className="text-white font-medium text-[12px] md:text-[15px]">Health Protocol</h1>
            <h1 className="text-white font-medium text-[12px] md:text-[15px]">Best Service</h1>
          </div>

          <div className="flex justify-left md:justify-center items-center pt-5 px-2 lg:items-center lg:justify-center">
            <button className="border text-[10px] md:text-[14px] border-yellow-200 rounded-md font-semibold bg-yellow-300 px-7 p-2">
              About Us
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;