import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-12">
      {/* Testimonial Section */}
      <h1 className="text-3xl font-bold mb-4 text-center">Testimonial</h1>
      <div className="max-w-8xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Testimonial 1</h2>
            <p className="text-gray-600">This is a testimonial description.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Testimonial 2</h2>
            <p className="text-gray-600">This is a testimonial description.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Testimonial 3</h2>
            <p className="text-gray-600">This is a testimonial description.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
