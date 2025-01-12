import React from "react";
import { useLocation } from "react-router-dom";

const ServiceDetail = () => {
  const location = useLocation();
  const { id, title, image, description } = location.state || {};

  if (!location.state) {
    return <p className="text-center mt-10">No service data available.</p>;
  }

  return (
    <div className="p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-5">{title}</h1>
        <img src={image} alt={title} className="w-full h-64 object-cover mb-5" />
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ServiceDetail;