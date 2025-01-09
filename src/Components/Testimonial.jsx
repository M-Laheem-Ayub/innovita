import React from "react";
import T1 from "../assets/t1.jpg";
import T2 from "../assets/t2.jpg";
import T3 from "../assets/t3.jpg";
import T4 from "../assets/t4.jpg";
// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    timeAgo: "2 months ago",
    stars: 5,
    image: T1,
    text: "Innovita provided exceptional interior design services. Highly recommend for anyone looking to transform their space!",
  },
  {
    id: 2,
    name: "Jane Smith",
    timeAgo: "1 month ago",
    stars: 4,
    image: T2,
    text: "Fantastic service! Innovita exceeded my expectations with their creative interior designs.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    timeAgo: "2 days ago",
    stars: 5,
    image: T3,
    text: "Very pleased with Innovita’s work on my office interior. Professional and reliable service!",
  },
  {
    id: 4,
    name: "Bob Brown",
    timeAgo: "3 weeks ago",
    stars: 4,
    image: T4,
    text: "Great experience with Innovita. Friendly staff and great interior design results. Will use again!",
  },
];

const Testimonial = () => {
  return (
    <div>
      <h2 className="text-5xl 2xl:text-7xl text-center font-bold font-oxanium text-gray-800 mt-14 mb-12">
        Customers Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col items-start gap-4 p-6 bg-gray-100 rounded-lg"
          >
            {/* Image, Name, and Time Ago in One Div */}
            <div className="flex font-oxanium items-center gap-3">
              <img
                src={testimonial.image}
                alt="affordable and cheap interior designer in dubai, affordable and cheap interior designer in uae, interior designers, interior design, interior, near me "
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.timeAgo}</p>
                <div className="flex justify-center mt-2">
                  {Array(testimonial.stars)
                    .fill(0)
                    .map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"></path>
                      </svg>
                    ))}
                </div>
              </div>
            </div>
            {/* Rating */}
            {/* Paragraph */}
            <p className="mt-4 text-gray-700 font-oxanium text-sm text-justify lg:text-left">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
