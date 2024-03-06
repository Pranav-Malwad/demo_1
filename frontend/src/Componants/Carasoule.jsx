import React from "react";
import { useState } from "react";
const Carasoule = () => {
  let [counter, setcounter] = useState(0);

  function handlePreviousButtonClick() {
    {
      counter == 0 ? (counter = data.length) : setcounter(counter - 1);
    }
  }
  function handleNextButtonClick() {
    {
      counter == data.length - 1 ? setcounter(0) : setcounter(counter + 1);
    }
  }
  let data = [
    "https://images.pexels.com/photos/4144829/pexels-photo-4144829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6937870/pexels-photo-6937870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2781195/pexels-photo-2781195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <>
      <div className="flex items-center p-4 justify-center relative">
        <button
          className="p-2  text-white absolute left-10 z-20 text-4xl "
          onClick={handlePreviousButtonClick}
        >
          &lt;
        </button>

        <img
          className="border-2 w-full h-[500px] rounded-lg object-cover "
          src={data[counter]}
          alt=""
        />
        <p className="absolute text-white "></p>
        <button
          className="p-2 absolute text-white
                  right-10 text-4xl "
          onClick={handleNextButtonClick}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default Carasoule;
