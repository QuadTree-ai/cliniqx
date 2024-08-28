/* Testimonials.tsx */
export default function Testimonial() {
    return (
      <section id="testimonials" className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"This is a testimonial from a satisfied customer."</p>
              <h3 className="text-xl font-semibold text-gray-800">Customer Name</h3>
              <p className="text-gray-600">Position</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"This is another testimonial from a happy client."</p>
              <h3 className="text-xl font-semibold text-gray-800">Client Name</h3>
              <p className="text-gray-600">Position</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"More positive feedback from our users."</p>
              <h3 className="text-xl font-semibold text-gray-800">User Name</h3>
              <p className="text-gray-600">Position</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  