import React, { useState } from 'react';

import ImageModal from './ImageModal';
import WarehouseOneImageOne from '../assets/Warehouse1_Image_One.jpg';
import WarehouseOneImageTwo from '../assets/Warehouse1_Image_Two.jpg';
import WarehouseOneImageThree from '../assets/Warehouse1_Image_Three.jpg';
import WarehouseTwoImageOne from '../assets/Warehouse2_Image_One.jpg';
import WarehouseTwoImageTwo from '../assets/Warehouse2_Image_Two.jpg';
import WarehouseTwoImageThree from '../assets/Warehouse2_Image_Three.jpg';
import WarehouseThreeImageOne from '../assets/Warehouse3_Image_One.jpg';
import WarehouseThreeImageTwo from '../assets/Warehouse3_Image_Two.jpg';
import WarehouseThreeImageThree from '../assets/Warehouse3_Image_Three.jpg';
import WarehouseImageOne from '../assets/WarehouseImages_One.jpg';
import WarehouseImageTwo from '../assets/WarehouseImages_Two.jpg';
import WarehouseImageThree from '../assets/WarehouseImages_Three.jpg';
import WarehouseImageFour from '../assets/WarehouseImages_Four.jpg';
import WarehouseImageFive from '../assets/WarehouseImages_Five.jpg';
import WarehouseImageSix from '../assets/WarehouseImages_Six.jpg';
import WarehouseImageSeven from '../assets/WarehouseImages_Seven.jpg';
import WarehouseImageEight from '../assets/WarehouseImages_Eight.jpg';
import WarehouseImageTen from '../assets/WarehouseImages_Ten.jpg';
import WarehouseImageEleven from '../assets/WarehouseImages_Eleven.jpg';
import WarehouseImageTwelve from '../assets/WarehouseImages_Twelve.jpg';

const products = [
  {
    id: 12,
    imageSrc: WarehouseImageThree,
    imageAlt: "Warehouse Image 3",
  },
  {
    id: 10,
    imageSrc: WarehouseImageOne,
    imageAlt: "Warehouse Image 1",
  },
  {
    id: 11,
    imageSrc: WarehouseImageTwo,
    imageAlt: "Warehouse Image 2",
  },
  {
    id: 13,
    imageSrc: WarehouseImageFour,
    imageAlt: "Warehouse Image 4",
  },
  {
    id: 14,
    imageSrc: WarehouseImageFive,
    imageAlt: "Warehouse Image 5",
  },
  {
    id: 15,
    imageSrc: WarehouseImageSix,
    imageAlt: "Warehouse Image 6",
  },
  {
    id: 16,
    imageSrc: WarehouseImageSeven,
    imageAlt: "Warehouse Image 7",
  },
  {
    id: 17,
    imageSrc: WarehouseImageEight,
    imageAlt: "Warehouse Image 8",
  },
  {
    id: 19,
    imageSrc: WarehouseImageTen,
    imageAlt: "Warehouse Image 10",
  },
  {
    id: 20,
    imageSrc: WarehouseImageEleven,
    imageAlt: "Warehouse Image 11",
  },
  {
    id: 21,
    imageSrc: WarehouseImageTwelve,
    imageAlt: "Warehouse Image 12",
  },
  {
    id: 1,
    imageSrc: WarehouseOneImageOne,
    imageAlt: "Warehouse 1 Image 1",
  },
  {
    id: 2,
    imageSrc: WarehouseOneImageTwo,
    imageAlt: "Warehouse 1 Image 2",
  },
  {
    id: 3,
    imageSrc: WarehouseOneImageThree,
    imageAlt: "Warehouse 1 Image 3",
  },
  {
    id: 4,
    imageSrc: WarehouseTwoImageOne,
    imageAlt: "Warehouse 2 Image 1",
  },
  {
    id: 5,
    imageSrc: WarehouseTwoImageTwo,
    imageAlt: "Warehouse 2 Image 2",
  },
  {
    id: 6,
    imageSrc: WarehouseTwoImageThree,
    imageAlt: "Warehouse 2 Image 3",
  },
  {
    id: 7,
    imageSrc: WarehouseThreeImageOne,
    imageAlt: "Warehouse 3 Image 1",
  },
  {
    id: 8,
    imageSrc: WarehouseThreeImageTwo,
    imageAlt: "Warehouse 3 Image 2",
  },
  {
    id: 9,
    imageSrc: WarehouseThreeImageThree,
    imageAlt: "Warehouse 3 Image 3",
  }
];

export default function WarehouseImages() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ selectedImage, setSelectedImage ] = useState({ src: '', alt: '' });

  const openModal = (imageSrc, imageAlt) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
    setIsModalOpen(true);
  };

  return (
    <div data-aos="fade-up">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl py-5 text-center font-bold text-gray-900">Features</h1>
          <hr />
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div
                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                    onClick={() => openModal(product.imageSrc, product.imageAlt)}
                    data-aos="fade-up-right"
                  >
                    <img
                      loading="lazy"
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
        </div>

        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imgSrc={selectedImage.src}
          alt={selectedImage.alt}
        />
      </div>
    </div>
  );
}
