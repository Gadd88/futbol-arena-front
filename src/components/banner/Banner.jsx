import { useRef, useState } from "react";
import { data } from "../../../public/bannerPictures/data.js";

export const Banner = () => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollToImage = (direction, event) => {
        event.preventDefault();
        const newIndex = direction === 'prev' ? (currentIndex === 0 ? data.length - 1 : currentIndex - 1) : (currentIndex === data.length - 1 ? 0 : currentIndex + 1);
        setCurrentIndex(newIndex);
        event.currentTarget.blur();
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            <div className="w-full h-[400px] overflow-hidden rounded-md relative p-5">
                <div className="absolute top-1/2 left-8 text-4xl text-white cursor-pointer" onClick={(event) => scrollToImage('prev', event)}>&#8656;</div>

                <div className="absolute top-1/2 right-8 text-4xl text-white cursor-pointer" onClick={(event) => scrollToImage('next', event)} >&#8658;</div>

                <div className="w-full h-full" ref={listRef}>
                    {
                        data.map((item, idx) => (
                            <figure key={item.id} className={`${idx === currentIndex ? 'block' : 'hidden'} h-full w-full rounded-md overflow-hidden`}>
                                <img className="w-full h-full object-stretch" src={item.imgUrl} alt={`banner-${item.id}`} />
                            </figure>
                        ))
                    }
                </div>
                <div className="flex justify-center items-center absolute bottom-10 left-0 right-0 mx-auto">
                    {
                        data.map((_, idx) => (
                            <div key={idx} className={`${idx === currentIndex ? 'bg-accent-100' : 'bg-text-200'} my-2 mx-1 cursor-pointer text-center w-4 h-4 rounded-full`} onClick={() => goToSlide(idx)}></div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}