import { Card } from "flowbite-react";

export const ServiciosCards = ({ title, description, image }) => {
  return (
    <>
      <Card
        className="max-w-full h-[300px] w-[450px] mx-auto relative"
        imgAlt="foto"
      >
        <img
          src={image}
          alt="foto"
          className="top-0 left-0 z-0 object-cover w-full h-full mx-auto rounded"
        />

        <div className="absolute text-center h-full w-full bg-transparent flex flex-col justify-center items-center z-10 hover:backdrop-blur">
          <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-white dark:text-gray-400 p-5 mr-10 items-center">
            {description}
          </p>
        </div>
      </Card>
    </>
  );
};
