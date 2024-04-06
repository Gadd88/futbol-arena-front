import React, { useEffect, useRef, useState } from "react";
import { data } from "../../assets/bannerPictures/data.js";

export const Banner = () => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1;
            });
        } else {
            const isLastSlide = currentIndex === data.length - 1;
            if (!isLastSlide) {
                setCurrentIndex(curr => curr + 1);
            }
        }
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            <div className="w-full h-[400px] overflow-hidden rounded-md">
                <div className="h-full relative">

                    <div className="absolute top-1/2 translate-x-0 translate-y-[50%] left-8 text-4xl text-white cursor-pointer" onClick={() => scrollToImage('prev')}>&#8656;</div>

                    <div className="absolute top-1/2 translate-x-0 translate-y-[50%] right-8 text-4xl text-white cursor-pointer" onClick={() => scrollToImage('next')} >&#8658;</div>

                    <div className="w-full h-full overflow-hidden" ref={listRef}>
                            {
                                data.map((item) => (
                                        <figure key={item.id}>
                                            <img className="w-full h-full object-cover" src={item.imgUrl}alt={`banner-${item.id}`} />
                                        </figure>
                                ))
                            }
                    </div>
                    <div className="flex justify-center items-center absolute bottom-10 left-0 right-0 mx-auto">
                        {
                            data.map((_, idx)=>(
                                <div key={idx} className={`${idx === currentIndex ? 'bg-arena-green-400':"bg-slate-300"} my-2 mx-1 cursor-pointer text-center  w-4 h-4 rounded-full`} onClick={() => goToSlide(idx)}>  
                                    </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}