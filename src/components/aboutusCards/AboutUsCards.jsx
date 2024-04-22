import gitlogo from "../../assets/github.svg";
import linlogo from "../../assets/linkedin.svg";
import { Link } from "react-router-dom";


export const AboutUsCards = ({nombre, texto, github, linkedin}) => {
  return (
      <article className="flex flex-col bg-arena-green-50 p-4 rounded-lg h-96 w-full justify-start ">
        <figure className="flex justify-center justify-items-center">
          <img
            src="https://picsum.photos/200/200"
            alt=""
            className="rounded-full mb-3"
          />
        </figure>
        <div>
          <h3 className="text-text-100 font-bold text-center text-xl mb-4"> {nombre}
          </h3>
          <p className="text-text-200 italic text-start text-sm">
            {texto}
          </p>
        </div>
        <div className="flex flex-row gap-3 mt-auto justify-evenly">
          <Link to={github}>
            <img src={gitlogo} alt="" className="w-8 h-8 hover:scale-[1.5]" />
          </Link>
          <Link to={linkedin}>
            <img src={linlogo} alt="" className="w-8 h-8 hover:scale-[1.5]" />
          </Link>
        </div>
      </article>
  );
};

