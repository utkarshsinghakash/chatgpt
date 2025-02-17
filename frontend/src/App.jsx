import Sidebar from "./components/Sidebar";
import ChatSection from "./components/ChatSection";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatSection />
    </div>
  );
}

export default App;
