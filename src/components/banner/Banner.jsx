import React, { useEffect, useRef, useState } from "react";
import { data } from "../../assets/bannerPictures/data.js";

export const Banner = () => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("figure")[currentIndex];
        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [currentIndex]);

    const scrollToImage = (direction, event) => {
        event.preventDefault();
        if (direction === 'prev') {
            setCurrentIndex(curr => curr === 0 ? data.length - 1 : curr - 1);
        } else {
            setCurrentIndex(curr => curr === data.length - 1 ? 0 : curr + 1);
        }
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            <div className="w-full h-[400px] overflow-hidden rounded-md relative">
                <div className="absolute top-1/2 left-8 text-4xl text-white cursor-pointer" onClick={(event) => scrollToImage('prev', event)}>&#8656;</div>

                <div className="absolute top-1/2 right-8 text-4xl text-white cursor-pointer" onClick={(event) => scrollToImage('next', event)} >&#8658;</div>

                <div className="w-full h-full overflow-hidden" ref={listRef}>
                    {
                        data.map((item, idx) => (
                            <figure key={item.id} className={`${idx === currentIndex ? 'block' : 'hidden'}`}>
                                <img className="w-full h-full object-cover" src={item.imgUrl} alt={`banner-${item.id}`} />
                            </figure>
                        ))
                    }
                </div>
                <div className="flex justify-center items-center absolute bottom-10 left-0 right-0 mx-auto">
                    {
                        data.map((_, idx) => (
                            <div key={idx} className={`${idx === currentIndex ? 'bg-arena-green-400' : 'bg-slate-300'} my-2 mx-1 cursor-pointer text-center w-4 h-4 rounded-full`} onClick={() => goToSlide(idx)}></div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}