import { FaBriefcase, FaLightbulb } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5"; // Icons for menu toggle

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".sidebar-container")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Sidebar Toggle for Mobile */}
      <button
        className="p-3 fixed top-2 left-2 bg-transparent text-black rounded-md md:hidden"
        onClick={(e) => {
          e.stopPropagation(); // Prevent immediate closing
          setIsOpen(true);
        }}
      >
        <IoMenu size={24} />
      </button>

      {/* Sidebar Container */}
      <div
        className={`sidebar-container fixed md:relative top-0 left-0 h-full bg-blue-100 p-4 flex flex-col gap-4 w-64 md:w-1/4 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button (Visible Only on Mobile) */}
        <button
          className="self-end text-black md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <IoClose size={24} />
        </button>

        <h1 className="text-xl font-bold text-center">XZAYOGN</h1>

        <button className="flex items-center gap-2 bg-white p-2 rounded-lg shadow">
          <FaLightbulb className="text-pink-500" />
          Upcoming
        </button>

        <button className="flex items-center gap-2 bg-white p-2 rounded-lg shadow">
          <IoMdAdd className="text-gray-700" />
          New Chat
        </button>

        <button className="flex items-center gap-2 bg-blue-500 text-white p-2 rounded-lg shadow">
          <FaBriefcase />
          My Jobs
        </button>

        <div className="mt-4">
          <p className="font-semibold">Today</p>
          <button className="w-full text-left text-blue-600">
            Career switch advice?
          </button>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Chat History</p>
          {[
            "How to improve LinkedIn?",
            "Common interview Qs?",
            "High-paying remote jobs?",
            "Resume optimization?",
            "Career in Digital Marketing?",
          ].map((item, index) => (
            <button
              key={index}
              className="block w-full text-left text-blue-600 py-1"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
