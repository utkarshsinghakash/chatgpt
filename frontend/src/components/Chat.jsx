import React, { useState, useEffect } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { auth, signInWithGoogle, logout } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Chat = () => {
  const [user, setUser] = useState(null);
  const [inputDisabled, setInputDisabled] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setInputDisabled(!currentUser);
    });
    return () => unsubscribe();
  }, []);

  const getInitials = (name) => {
    if (!name) return "";
    const nameParts = name.split(" ");
    const firstInitial = nameParts[0]?.charAt(0).toUpperCase() || "";
    const lastInitial = nameParts[1]?.charAt(0).toUpperCase() || "";
    return `${firstInitial}${lastInitial}`;
  };

  const handleInputClick = () => {
    if (!user) {
      signInWithGoogle();
    }
  };

  return (
    <div className="w-full max-w-4xl relative px-4 md:px-0">
      <div className="absolute top-4 right-4 flex items-center space-x-3">
        {user ? (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-700 text-white text-lg font-semibold rounded-full">
              {getInitials(user.displayName)}
            </div>
            <button
              onClick={logout}
              className="bg-red-500 text-black px-4 py-2 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex space-x-3">
            <button
              onClick={signInWithGoogle}
              className="bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
            <button
              onClick={signInWithGoogle}
              className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>

      <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center space-x-2 mt-20">
        <span>Hey, I am XZAYOGN</span>
      </h3>

      <div className="mt-6 flex items-center border border-gray-300 rounded-full p-3 shadow-sm">
        <input
          type="text"
          placeholder="Message XZAYOGN"
          className="flex-1 outline-none px-3 text-gray-700"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onClick={handleInputClick}
        />
        <button className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700">
          <FaRegPaperPlane />
        </button>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {[
          {
            text: "Game designer jobs in India?",
            color: "text-red-500 border-red-300",
          },
          {
            text: "Visa-sponsored jobs in UK?",
            color: "text-green-500 border-green-300",
          },
          {
            text: "Best SDE jobs in Mumbai?",
            color: "text-blue-500 border-blue-300",
          },
        ].map((item, index) => (
          <p
            key={index}
            className={`border px-4 py-2 rounded-full shadow-sm cursor-pointer hover:bg-gray-200 ${item.color}`}
          >
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Chat;
