
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const subCategories = [
    { name: 'Google Maps', href: '#', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.0355070818641!2d121.0084269695786!3d14.64787799663198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7ce3855fee5%3A0x7980b08de6c5f4e0!2sM.%20Ignacio%20Warehouse!5e0!3m2!1sfil!2sph!4v1710407450828!5m2!1sfil!2sph' },
    { name: 'Google Earth', href: '#', mapEmbed: 'GOOGLE_EARTH_EMBED_URL' },
    { name: 'Bing Maps', href: '#', mapEmbed: 'BING_MAPS_EMBED_URL' },
    { name: 'Apple Maps', href: '#', mapEmbed: 'APPLE_MAPS_EMBED_URL' },
  ];

export default function Maps() {
    const [ mobileFiltersOpen, setMobileFiltersOpen ] = useState(false);
    const [ selectedMap, setSelectedMap ] = useState(null);

    const selectMap = (mapEmbed) => {
        setSelectedMap(mapEmbed);
        setMobileFiltersOpen(false);
    };
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>

                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                        {subCategories.map((category) => (
                        <li key={category.name}>
                            <button
                            type="button"
                            className="block px-2 py-3 text-left w-full"
                            onClick={() => selectMap(category.mapEmbed)}
                            >
                            {category.name}
                            </button>
                        </li>
                        ))}
                    </ul>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Our Location</h1>

          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

              </form>

              <div className="lg:col-span-3">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.0355070818641!2d121.0084269695786!3d14.64787799663198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7ce3855fee5%3A0x7980b08de6c5f4e0!2sM.%20Ignacio%20Warehouse!5e0!3m2!1sfil!2sph!4v1710407450828!5m2!1sfil!2sph"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>

            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
