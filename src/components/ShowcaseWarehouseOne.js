import WarehouseOneImageOne from '../assets/Warehouse1_Image_One.jpg';
import WarehouseOneImageTwo from '../assets/Warehouse1_Image_Two.jpg';
import WarehouseOneImageThree from '../assets/Warehouse1_Image_Three.jpg';

const callouts = [
    {
      name: 'Warehouse 1 Gate',
      description: 'A Large Gates Entrance',
      imageSrc: WarehouseOneImageOne,
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    },
    {
      name: 'Warehouse 1 Lobby',
      description: 'High Ceiling for Large Storage',
      imageSrc: WarehouseOneImageTwo,
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Warehouse 1 Parking',
      description: 'A Wide Space for Parking',
      imageSrc: WarehouseOneImageThree,
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function ShowcaseWarehouseOne() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h1 className="text-2xl py-5 text-center font-bold text-gray-900">Warehouse 1</h1>
                <hr/>
                <p className="text-base pt-5 text-gray-500">
                Warehouse 1 is estimated to be 
                <span className="text-rose-400"> 400 sqm facility</span>, thoughtfully designed for practicality and efficiency. Key features include 
                <span className="text-rose-400"> high ceilings</span>, which contribute to a spacious atmosphere and enable enhanced storage capabilities. The warehouse also offers 
                <span className="text-rose-400"> ample parking spaces</span>, accommodating vehicles of various sizes with ease. A standout feature is the 24-hour security guard at the main gate, ensuring safety and security for stored goods.
                </p>





            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  