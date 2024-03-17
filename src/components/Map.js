import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const subCategories = [
    { name: 'Apple Maps', url: 'https://maps.apple.com/?address=78%20Kaingin%20Road,%20Apolonio%20Samson,%20Quezon%20City,%201106%20Metro%20Manila,%20Philippines&ll=14.648493,121.009708&q=78%20Kaingin%20Road' },
    { name: 'Bing Maps', url: 'https://www.bing.com/maps?osid=296eed10-62f1-4b35-8ca1-a0cb868870b2&cp=14.648676~121.004255&lvl=16&pi=0&imgid=a0eadefe-c251-417f-a996-a1149d2951e1&v=2&sV=2&form=S00027' },
    { name: 'Google Earth', url: 'https://earth.google.com/web/search/M.+Ignacio+Warehouse,+Kaingin+Road,+Balintawak,+Quezon+City,+Metro+Manila/@14.6478767,121.0090707,15.26523397a,814.57589625d,35y,0h,0t,0r/data=CrYBGosBEoQBCiUweDMzOTdiN2NlMzg1NWZlZTU6MHg3OTgwYjA4ZGU2YzVmNGUwGfavUXu2Sy1AIX7aTZWUQF5AKklNLiBJZ25hY2lvIFdhcmVob3VzZSwgS2FpbmdpbiBSb2FkLCBCYWxpbnRhd2FrLCBRdWV6b24gQ2l0eSwgTWV0cm8gTWFuaWxhGAIgASImCiQJc87R6upMLUAROR2pD4JKLUAZcYG-7d1AXkAhmGvNTEtAXkA6AwoBMA' },
    { name: 'Google Maps', url: 'https://maps.app.goo.gl/3krcJjHYGCwAhsE58' },
];

export default function Maps() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white" data-aos="fade-up">
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
          {/* ... Transition and Dialog components ... */}
          <div className="fixed inset-0 z-40 flex">
            {/* ... Transition Child components ... */}
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <form className="mt-4 border-t border-gray-200">
                <ul className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.url} className="block px-2 py-3 text-left w-full" target="_blank" rel="noopener noreferrer">{category.name}</a>
                    </li>
                  ))}
                </ul>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 pb-6 pt-24 border-b border-gray-200">Our Location</h1>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Desktop Filters */}
            <form className="hidden lg:block">
              <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                {subCategories.map((category) => (
                  <li key={category.name}>
                    <a href={category.url} className="block text-left" target="_blank" rel="noopener noreferrer">{category.name}</a>
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
                    title="M. Ignacio Warehouse Location"
                ></iframe>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
