/* Features.tsx */
import { CheckCircle } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Feature 1</h3>
            <p className="text-gray-600">Description of the first feature.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Feature 2</h3>
            <p className="text-gray-600">Description of the second feature.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Feature 3</h3>
            <p className="text-gray-600">Description of the third feature.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
