import { ArrowsPointingOutIcon, ClockIcon, BuildingOfficeIcon } from '@heroicons/react/20/solid';
import WarehouseImage from '../assets/M_Ignacio_Warehouse_Landing.jpg';

const features = [
  {
    name: 'Excellent Public Transport Links',
    description:
      "Just a short journey away from LRT-1 Balintawak Station and EDSA Busway's Kaingin Bus Stop, our location offers unbeatable convenience for commuting.",
    icon: ArrowsPointingOutIcon,
  },
  {
    name: 'Direct Skyway Stage 3 Access',
    description: 'Right at Skyway Stage 3 entrance, our warehouse gives quick access to Quezon Ave. and Balintawak, making city travel easy.',
    icon: ClockIcon,
  },
  {
    name: 'Prime Metro Location',
    description: "M. Ignacio Warehouse is in the heart of the Metro, close to business areas in Caloocan, Valenzuela, and Manila - perfect for business operations.",
    icon: BuildingOfficeIcon,
  },
]

export default function Landing() {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">M. Ignacio Warehouse</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Warehouse Space for Rent</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Visit our spacious warehouse at <span className='text-indigo-500'>#78 Kaingin Road, Balintawak, Quezon City</span>. Ideal for large containers and ample storage needs.              
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={WarehouseImage}
            alt="M Igancio Warehouse Building No 5"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
