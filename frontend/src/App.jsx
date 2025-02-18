import React from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col items-center  bg-white p-2">
        <Chat />
      </div>
    </div>
  );
};

export default App;
