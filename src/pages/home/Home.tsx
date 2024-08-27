import useMediaQuery from "../../hooks/useMediaQuery";
import { Drawer, DrawerTrigger } from "../../components/ui/drawer";
import { MenuIcon, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Button } from "../../components/ui/button";
import CartItem from "../../components/CartItem";

const Home = () => {
  const isDesktop = useMediaQuery("(min-width:758px)");
  const products = useSelector((state: RootState) => state.product?.product);

  return (
    <main className="flex flex-col  h-fit">
      <div className="w-full sm:h-[60%] px-4 py-4 grid grid-cols-3 gap-4">
        {products.filter((_,idx)=>idx <=2).map((product, index) => (
          <CartItem product={product} key={index} index={index} />
        ))}
      </div>

      <div className="relative overflow-hidden w-screen h-[200px]  text-white">
        <div className="absolute  gap-4 w-full h-full flex whitespace-nowrap animate-marquee">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative overflow-hidden h-full bg-white border w-[400px] hover:[&>.first]:scale-105 hover:border-[#2563EB] rounded-xl cursor-pointer 
             `}>
              <div className="flex first justify-center w-full items-center h-fit transition-all">
                <img
                  src={product.img}
                  alt={product.name}
                  className={`w-48 h-fit  object-cover`}
                />
              </div>
              <div
                className={`
              absolute "bg-gradient-to-r from-white border bottom-7   backdrop-blur-sm  to-[#CACACA] bg-transparent flex  px-1 py-1 justify-center items-center h-fit w-fit  left-7  text-md p gap-3 rounded-full font-semibold text-black`}>
                <h1 className="text-sm">{product.name}</h1>
                <Button
                  variant="default"
                  className="rounded-full hover:bg-[#2563e94b] h-fit w-fit p-2 bg-[#2562E9] text-white">
                  ${product.price.toFixed(2)} USD
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
