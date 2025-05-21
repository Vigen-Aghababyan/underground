import { useState } from 'react';
import classes from './slider.module.css';
import left from '/images/Left.png';
import right from '/images/Right.png';
import { images } from '../../Constants/Constants';
import { useMediaQuery } from 'react-responsive'; // (or implement your own mobile detection)

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Detect mobile

    // Show 1 image on mobile, 3 on desktop
    const visibleCount = isMobile ? 1 : 3;

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + visibleCount) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - visibleCount + images.length) % images.length
        );
    };

    // Get visible images based on device
    const visibleImages = [];
    for (let i = 0; i < visibleCount; i++) {
        visibleImages.push(images[(currentIndex + i) % images.length]);
    }

    return (
        <div className={classes.sliderContainer}>
            <button
                className={`${classes.sliderButton} ${classes.left}`}
                onClick={goToPrevious}
            >
                <img src={left} alt="PREV" />
            </button>

            <div className={classes.sliderImageContainer}>
                {visibleImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`slider-image-${index}`}
                        className={classes.sliderImage}
                    />
                ))}
            </div>

            <button
                className={`${classes.sliderButton} ${classes.right}`}
                onClick={goToNext}
            >
                <img src={right} alt="NEXT" />
            </button>
        </div>
    );
};

export default Slider;