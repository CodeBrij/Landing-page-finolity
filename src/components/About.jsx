import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const services = [
  {
    icon: "🛠️",
    title: "Managed Services",
    info: "Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.",
  },
  {
    icon: "🌐",
    title: "Web Development",
    info: "Our web development services can help you establish an impactful online presence and reach your target audience effectively.",
  },
  {
    icon: "🖼️",
    title: "NFT Development",
    info: "Non Fungible Tokens are in Trend. We’ve been building them since 2016.",
  },
  {
    icon: "💼",
    title: "IT Consulting & Advisory",
    info: "The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth.",
  },
  {
    icon: "📱",
    title: "Mobile Development",
    info: "We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms.",
  },
  {
    icon: "💻",
    title: "Software Development",
    info: "From a custom CBM to Transportation Management System, we’ve built it all.",
  },
  {
    icon: "🔒",
    title: "Cyber Security",
    info: "Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.",
  },
  {
    icon: "☁️",
    title: "Cloud Services",
    info: "With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.",
  },
];

const About = () => {
  // Create a reference for the Typed instance
  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedRef.current, {
      strings: [
        "Cost-effectiveness",
        "Innovative Technology",
        "Industry Expertise",
        "Scalability",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <div className="max-w-4xl mb-10 mt-10 sm:pt-20 px-10 xl:mx-25">
        <h1 className="text-4xl font-bold text-gray-900">
          <span className="text-gray-900">
            Simplifying IT for a complex world.
          </span>
          <br />
          We believe in <span className="text-[#d40000]" ref={typedRef}></span>
        </h1>

        <p className="text-gray-600 text-lg mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          voluptatibus quam modi et qui explicabo, provident officia! Eveniet
          tempore eligendi dolore nesciunt! Quia, debitis?
        </p>
    </div>

    <section className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-10 py-20">
      {/* Services Section */}
      <div className="w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4 text-[#d40000]">{service.icon}</div>
              <h2 className="text-xl font-bold mb-2 text-gray-900">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
