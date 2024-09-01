import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen flex flex-col h-full w-full overflow-hidden ">
      <Header />
      <div className="w-full lg:max-w-screen-2xl lg:mx-auto flex-grow">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
