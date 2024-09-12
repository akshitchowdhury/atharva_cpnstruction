import React from 'react';
import Carousel from 'react-multi-carousel';
import YouTube from 'react-youtube';
import 'react-multi-carousel/lib/styles.css';

const HomeVidReview = () => {
  const videoIds = [
    'eHlaunuiW_Q',
    'h1RF3MnbP6g',
    'CLbjGNWHxkI',
    'qrNx2kmzCJc'
  ];
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  const opts = {
    height: '200',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <h1 className="text-red-600 font-thin text-center p-4 text-2xl lg:text-4xl mb-16 leading-relaxed">
        Watch our happy customers share their reviews.
      </h1>
      <div className="flex justify-center items-center py-2">
        <div className="w-full max-w-7xl">
          <Carousel
            responsive={responsive}
            infinite
            autoPlaySpeed={3000}
            transitionDuration={600}
            itemClass="px-2 sm:px-4" 
            containerClass="pb-8" 
            className="rounded-none bg-inherit shadow-lg"
          >
            {videoIds.map((videoId, index) => (
              <div key={index} className="p-2 sm:p-4">
                <div className="rounded-none shadow-md overflow-hidden">
                  <YouTube
                    videoId={videoId}
                    opts={opts}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default HomeVidReview;