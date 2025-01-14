import { useState } from 'react';
import classes from './slider.module.css'
import left from '/images/Left.png'
import right from '/images/Right.png'
import { images } from '../../Constants/Constants';


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + images.length) % images.length
    );
  };

  // Получаем 3 изображения, начиная с текущего индекса
  const visibleImages = [
    images[(currentIndex + 0) % images.length],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
      <div className={classes.sliderContainer}>
      <button className={`${classes.sliderButton} ${classes.left}`} onClick={goToPrevious}>
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
          <button className={`${classes.sliderButton} ${classes.right}`} onClick={goToNext}>
            <img src={right} alt="NEXT" />
      </button>
    </div>
  );
};

export default Slider;
