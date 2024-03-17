import React, { useState } from 'react';
import ImageModal from './ImageModal';
import WarehouseOneImageOne from '../assets/Warehouse2_Image_One.jpg';
import WarehouseOneImageTwo from '../assets/Warehouse2_Image_Two.jpg';
import WarehouseOneImageThree from '../assets/Warehouse2_Image_Three.jpg';

const callouts = [
  {
    name: 'Building 1 Office Floor',
    description: 'A Office Space',
    imageSrc: WarehouseOneImageOne,
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
  },
  {
    name: 'Building 1 Lobby',
    description: 'A Spacious Lobby below the Office Space',
    imageSrc: WarehouseOneImageTwo,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
  },
  {
    name: 'Building 1 Parking',
    description: 'A View inside the Building 1 Lobby',
    imageSrc: WarehouseOneImageThree,
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
  },
];

export default function ShowcaseWarehouseTwo() {
  const [ selectedImage, setSelectedImage ] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div data-aos="fade-down">
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h1 className="text-2xl py-5 text-center font-bold text-gray-900">Building 2</h1>
            <hr />
              <p className="text-base pt-5 text-gray-500">
                <span className="text-indigo-500">Building 2</span> offers a <span className="text-indigo-500">2,000 sqm facility</span>, including a <span className="text-indigo-500">1,200 sqm floor area</span>. A unique feature of this building is its <span className="text-indigo-500">integrated office space</span>, making it ideal for combining storage and administrative functions. Historically, many renters have utilized this section as their business office. Additionally, Building 2 includes <span className="text-indigo-500">extra floor space</span>, enhancing its capacity for large-scale storage and accommodating a variety of large products. It features high ceilings, which are adaptable to suit different business needs. Like Building 1, it benefits from 24-hour security at the main gate.
              </p>


            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      onClick={() => openModal(callout.imageSrc)}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    {callout.name}
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedImage && (
          <ImageModal 
            isOpen={!!selectedImage}
            onClose={closeModal}
            imgSrc={selectedImage}
            width={2432}
            height={1442}
            alt={selectedImage}
          />
        )}
      </div>
    </div>
  );
}
