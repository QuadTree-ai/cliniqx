/* Services.tsx */
const Services = () => {
    return (
      <section id="services" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Service 1</h3>
              <p className="text-gray-600">Description of the first service.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Service 2</h3>
              <p className="text-gray-600">Description of the second service.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Service 3</h3>
              <p className="text-gray-600">Description of the third service.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  