"use client";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-gray-100 py-12 text-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 px-4 mb-4 lg:mb-0">
            <h6 className="uppercase text-gray-700 font-bold mb-4">
              Contact Info
            </h6>
            <ul>
              <li className="mt-2">
                Email:{" "}
                <a
                  href="mailto:info@example.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  info@example.com
                </a>
              </li>
              <li className="mt-2">
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-gray-900"
                >
                  +1234567890
                </a>
              </li>
              <li className="mt-2">Address: 123 Main St, Anytown, USA 12345</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 px-4 mb-4 lg:mb-0">
            <h6 className="uppercase text-gray-700 font-bold mb-4">
              Social Media
            </h6>
            <ul>
              <li className="mt-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Facebook
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Twitter
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/2 px-4 mb-4 lg:mb-0">
            <h6 className="uppercase text-gray-700 font-bold mb-4">
              Newsletter
            </h6>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-gray-200 border-2 border-gray-400 rounded-lg w-full py-2 pl-10 text-sm text-gray-700"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-2"
              >
                Subscribe
              </button>
              {subscribed && (
                <p className="text-green-500 mt-2">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
