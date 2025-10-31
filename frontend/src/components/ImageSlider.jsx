import { useState } from 'react';
import box from '../assets/box.jpg';
import leaf from '../assets/leaf.jpg';
import mesh from '../assets/mesh.jpg';
import pp from '../assets/pp.jpg';
import honey from '../assets/honeycomb.jpeg';

const ImageSlider = () => {
    const images = [box, leaf, mesh, pp, honey];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="w-full">
                <img
                    src={images[currentIndex]}
                    alt={`Q Fashion Lab Slide ${currentIndex + 1}`}
                    className="rounded-lg"
                />
            </div>
            <div className="flex gap-2 p-2 items-center justify-center overflow-hidden">
                <button
                    className="flex items-center justify-center w-5 h-5 pb-0.5 rounded-full bg-[#1E3A5F] hover:bg-[#00A8CC]"
                    onClick={prevSlide}
                >
                    &#8249; {/* Left chevron */}
                </button>
                <div className="flex items-center justify-center p-2">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`w-2 h-2 rounded-full mx-2 ${
                                index === currentIndex ? 'bg-[#00A8CC]' : 'bg-[#1E3A5F]'
                            }`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>{' '}
                <button
                    className="flex items-center justify-center w-5 h-5 pb-0.5 rounded-full bg-[#1E3A5F] hover:bg-[#00A8CC]"
                    onClick={nextSlide}
                >
                    &#8250; {/* Right chevron */}
                </button>
            </div>
        </>
    );
};

export default ImageSlider;
