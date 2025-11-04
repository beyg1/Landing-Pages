"use client";

import Image from "next/image";
import React from "react";

interface ImageGalleryProps {
  image: string[];
}
const ImageGallery = ({ image }: ImageGalleryProps) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-start lg:gap-8 md:gap-6 xs:gap-4">
      <div className="flex md:flex-col items-start lg:gap-8 md:gap-6 xs:gap-4">
        {image.map((image, index) => (
          <div
            key={index}
            className="bg-gray-100 lg:w-[90px] cursor-pointer md:w-[60px] xs:w-full flex object-cover object-center lg:h-[90px] md:h-[60px] xs:h-max rounded-lg hover:opacity-75"
          >
            <Image
              src={"/asgaardsofa.png"}
              alt={"Side Image"}
              className=" rounded-lg"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
      <div className=" lg:h-[500px] md:h-[350px] lg:w-[500px] md:w-[400px] flex justify-center">
        <Image
          src={"/asgaardsofa.png"}
          alt="Asgaard Sofa"
          className="rounded-xl h-[91%] bg-gray-100 w-full"
          width={1000}
          height={500}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
