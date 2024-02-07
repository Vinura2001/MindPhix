import React from 'react';
import Image from 'next/image';

interface FeatureBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  isImageOnRight?: boolean; // New prop to determine the side of the image
  imageWidth:number;
  imageHeight:number;
}

const Feature: React.FC<FeatureBannerProps> = ({ title, description, imageUrl, isImageOnRight,imageWidth,imageHeight }) => {
  const flexDirection = isImageOnRight ? 'row-reverse' : 'row';

  return (
    <div className={`rounded-lg rounded-br-[80px] bg-white md:p-9 px-4 py-9 mt-10 shadow-lg`}>
      <div className={`flex flex-col md:flex-${flexDirection} justify-between items-center`}>
        {/* Banner Content */}
        <div className="md:w-3/5">
          <h2 className="md-text-7xl text-3xl font-bold text-black mb-15 leading-relaxed">
            {title}
          </h2>
          <p className="text-black text-sm mb-8 pr-20 mt-4 text-justify">
            {description}
          </p>
        </div>
        {/* Banner Image */}
        <div>
          <Image
            src={imageUrl}
            alt="banner-image"
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
