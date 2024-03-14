import WarehouseImage from '../assets/M_Ignacio_Warehouse_Icon.png';
import MIgnacioIcon from '../assets/M_Ignacio_Icon.png';


export default function Example() {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-24" src={WarehouseImage} alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <h3 className="text-lg font-semibold text-gray-900">
                Ready to Explore Our Warehouse?
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Reserve a call to schedule your visit or for any inquiries. We’re here to assist you with all your storage needs.
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-14 w-14 rounded-full"
                src={MIgnacioIcon}
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Mina Ignacio</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Warehouse Manager</div>
              </div>
              <div className="mt-8 flex items-center justify-center space-x-3 text-base">
                <div className="text-rose-400 font-bold">+63955-347-3435</div>
                <div className="text-black-400 font-bold">|</div>
                <div className="text-indigo-400 font-bold">+63932-728-8811</div> 
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
  