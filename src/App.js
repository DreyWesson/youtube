import "./App.css";
import Header from "./components/Header";
import RecommendedVideo from "./components/RecommendedVideo";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideo />
      </div>
    </div>
  );
}

export default App;
