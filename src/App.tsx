import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SelectSeparator } from "./components/ui/select";
import AllItems from "./pages/all/AllItems";
import Product from "./pages/product/Product";

function App() {
  return (
    <div className=" h-full w-full overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<AllItems />} />
        <Route path="/product/:name" element={<Product />}>
          <Route path="shirts" />
          <Route path="stickers" />
        </Route>
      </Routes>
      <SelectSeparator color="#E5E5E5" />
      <Footer />
    </div>
  );
}

export default App;
