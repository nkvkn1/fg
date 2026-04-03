import React, { useState } from 'react';
import Image from 'next/image';

import portraitContanerCardProject from './ImgPortrait1.json';

const Portrait1 = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (key) => {
    setLoadedImages((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <>
    <div className="portraitContaner">
      <div className="portraitContanerGallery">
        <div className="portraitContanerGalleryGrid">
          {portraitContanerCardProject.product.flatMap((item, index) =>
            item.imgs.map((imgUrl, imgIndex) => {
              const imgKey = `${index}-${imgIndex}`;
              return (
                <div className="portraitContanerCard" key={imgKey}>
                  <a href="#" className="portraitContanerCardLink">
                    <div className="OverLayerCover"></div>
                    <div
                      className="ImgHolderCardCover"
                      // style={{ opacity: loadedImages[imgKey] ? 1 : 0 }}
                      style={{ opacity: loadedImages[imgKey] === false ? 0 : 1 }}
                    >
                      <Image
                        className="ImgLazyLoaded"
                        alt={item.itemTitle}
                        sizes="300px"
                        src={imgUrl}
                        width={1200}
                        height={1600}
                        unoptimized
                        onLoad={() => handleImageLoad(imgKey)}
                      />
                    </div>
                  </a>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Portrait1;
