import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Home className="min-h-[90vh]" />
    </div>
  );
}

export default App;
