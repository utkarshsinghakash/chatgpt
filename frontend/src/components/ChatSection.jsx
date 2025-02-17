import { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "../firebase"; // Import Firebase auth functions

const ChatSection = () => {
  const [user, setUser] = useState(null);

  // 🔥 Google Login Function
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Store user data in state
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  // 🔥 Logout Function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="relative flex-1 flex flex-col items-center justify-center text-center p-6">
      {/* 🔹 Header (Login/Signup/Logout) */}
      <div className="absolute top-4 right-6 flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 text-black font-bold text-lg rounded-full border-2 border-gray-500">
              {user.displayName
                .split(" ") // Split name into parts
                .map((word) => word[0].toUpperCase()) // Get first letter and capitalize it
                .join("")}{" "}
              {/* Join initials together */}
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-black px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3 justify-end">
            <button
              onClick={handleGoogleLogin}
              className="bg-blue-600 text-black px-4 py-2 rounded-lg shadow transition"
            >
              Login
            </button>
            <button
              onClick={handleGoogleLogin}
              className="bg-green-600 text-black px-4 py-2 rounded-lg shadow transition"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>

      {/* 🔹 Main Content */}
      <h2 className="text-2xl md:text-3xl font-bold mt-4">hey i am xzayogn</h2>

      {/* 🔹 Input Box */}
      <input
        type="text"
        placeholder="Message xzayogn"
        className="border p-2 mt-4 w-full max-w-md rounded-lg shadow"
        onFocus={(e) => {
          if (!user) {
            e.target.blur(); // Prevent typing
            handleGoogleLogin(); // Trigger login
          }
        }}
      />

      {/* 🔹 Suggested Queries */}
      <div className="flex gap-2 mt-4 flex-wrap justify-center">
        {[
          "Game designer jobs in India?",
          "Visa-sponsored jobs in UK?",
          "Best SDE jobs in Mumbai?",
        ].map((tag, index) => (
          <button
            key={index}
            className="bg-gray-200 px-3 py-1 rounded-lg shadow text-sm md:text-base"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 🔹 Footer */}
      <footer className="mt-10 text-gray-500 text-xs md:text-sm">
        <a href="#" className="px-2">
          FAQ
        </a>{" "}
        |{" "}
        <a href="#" className="px-2">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="px-2">
          Terms of Service
        </a>{" "}
        |{" "}
        <a href="#" className="px-2">
          Contact Us
        </a>
      </footer>
    </div>
  );
};

export default ChatSection;
