import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllItems from "./pages/all/AllItems";
import Product from "./pages/product/Product";

function App() {
  return (
    <div className="min-h-screen flex flex-col h-full w-full overflow-hidden ">
      <Header />
      <div className="w-full px-4 lg:max-w-screen-2xl lg:mx-auto flex-grow">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<AllItems />} />
          <Route path="/product/:name" element={<Product />}>
            <Route path="shirts" />
            <Route path="stickers" />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
