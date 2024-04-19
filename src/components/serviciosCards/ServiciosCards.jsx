export const ServiciosCards = ({ title, description, image }) => {
  return (
      <article
        className="h-[300px] min-w-[400px] w-[400px] overflow-hidden rounded-sm p-5 bg-bg-300"
      >
        <figure className="w-full h-full relative rounded-md overflow-hidden">
          <img
            src={image}
            alt="foto"
            className="object-cover w-full h-full"
          />
          <article className="absolute text-center h-full w-full bg-black/50 flex flex-col justify-center items-center z-10 hover:backdrop-blur top-0 cursor-default text-white">
            <h5 className="text-2xl font-bold tracking-tight">
              {title}
            </h5>
            <p className="font-semibold p-5">
              {description}
            </p>
          </article>
        </figure>
      </article>
    );
};
