import React from "react";

const Card = () => {
  const data = [
    {
      id: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmqrIfbZ6XBg_5PGDiJf94i_vl_dyTGR9RshGeYFUIg&s",
      Title: "React JS",
      Description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora inventore laborum eum ipsum vero eius quos eveniet?Lorem ipsum dolorsit amet consectetur",
    },
    {
      id: 1,
      img: "https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png",
      Title: "Next JS",
      Description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora inventore laborum eum ipsum vero eius quos eveniet?Lorem ipsum dolorsit amet consectetur",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEWQxsH9DVTDR8zShe_834YWsNl_NaQiHT3VAsYCOzg&s",
      Title: "TypeScript",
      Description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora inventore laborum eum ipsum vero eius quos eveniet?Lorem ipsum dolorsit amet consectetur",
    },
    {
      id: 3,
      img: "https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png",
      Title: "Node JS",
      Description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora inventore laborum eum ipsum vero eius quos eveniet?Lorem ipsum dolorsit amet consectetur",
    },
    {
      id: 4,
      img: "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png",
      Title: "MongoDB",
      Description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora inventore laborum eum ipsum vero eius quos eveniet?Lorem ipsum dolorsit amet consectetur",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjAxrkmhFigCqFRFFtDFQ9B72kOqROw8G9Moowm2Ry7w&s",
      Title: "Java",
      Description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora inventore laborum eum ipsum vero eius quos eveniet?Lorem ipsum dolorsit amet consectetur",
    },
    {
      id: 6,
      img: "https://i.pinimg.com/originals/92/60/dd/9260dd459aa4566cfa25e86a3f10ea1b.png",
      Title: "Python",
      Description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora inventore laborum eum ipsum vero eius quos eveniet?Lorem ipsum dolorsit amet consectetur",
    },
    {
      id: 7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRex5mkUO5BopW4NS8VQpyHj8feW1pgXSeCYMYJlOT_3Q&s",
      Title: "Spring Boot",
      Description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora inventore laborum eum ipsum vero eius quos eveniet?Lorem ipsum dolorsit amet consectetur",
    },
    {
      id: 8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnRpu9jx2JoA3X36kt9wJUlZcAuVnYP8iub9k_EqNMbQ&s",
      Title: "Oracle",
      Description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora inventore laborum eum ipsum vero eius quos eveniet?Lorem ipsum dolorsit amet consectetur",
    },
  ];
  return (
    <>
      {data.map((item) => {
        return (
          <div div key={item.id}>
            <div className="flex flex-col border-2 border-black w-[325px] rounded-lg m-10 p-7 hover:scale-100  transition-all duration-300 ease-in-out hover:shadow-2xl">
              <div className="object-cover flex justify-center">
                <img className="h-[100px]" src={item.img} alt="" />
              </div>
              <h4 className="font-bold mt-4">Title: {item.Title}</h4>
              <p className="text-justify mb-4">{item.Description}</p>
              <div className="flex justify-between items-center">
                <button className="bg-gray-400 text-white  border-2 p-2 w-[100px] rounded-lg">
                  Try
                </button>
                <button className="bg-blue-600 text-white border-2 p-2 w-[100px] rounded-lg">
                  Buy
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
