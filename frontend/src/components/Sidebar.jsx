import React, { useState } from "react";
import { FaBriefcase, FaLightbulb, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <button
        className="p-3 text-gray-900 bg-white shadow-md fixed top-4 left-4 rounded-md md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-blue-100 p-5 flex flex-col shadow-lg transition-transform duration-300 ease-in-out z-50
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-72`}
      >
        <button
          className="absolute top-4 right-4 md:hidden p-2 text-gray-900"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={24} />
        </button>

        <h1 className="text-xl font-bold text-gray-900">XZAYOGN</h1>

        <div className="mt-5 space-y-3">
          <button className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md hover:bg-gray-200">
            <FaLightbulb className="text-pink-500" />
            <span>Upcoming</span>
          </button>

          <button className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md hover:bg-gray-200">
            <span className="text-lg font-bold">+</span>
            <span>New Chat</span>
          </button>

          <button className="flex items-center space-x-2 bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600">
            <FaBriefcase />
            <span>My Jobs</span>
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-gray-700 font-semibold">Today</h2>
          <p className="text-gray-900 mt-2 bg-white p-2 rounded-lg shadow-md">
            Career switch advice?
          </p>

          <h2 className="text-gray-700 font-semibold mt-4">Chat history</h2>
          {[
            "How to improve LinkedIn?",
            "Common interview Qs?",
            "High-paying remote jobs?",
            "Resume optimization?",
            "Career in Digital Marketing?",
          ].map((item, index) => (
            <p
              key={index}
              className="text-gray-900 mt-2 bg-white p-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-200"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
