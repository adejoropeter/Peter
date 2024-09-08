import { Button } from "./ui/button";

const Skeleton = () => {
  return (
    <div className="w-full sm:h-[60%] px-4 py-4 grid grid-cols-3 gap-4">
      {Array(3)
        .fill(0)
        .map((_, index) => {
          return (
            <>
              <div
                className={`relative border border-fuchsia-800 h-[200px] animate-pulse bg-gray-500  overflow-hidden   hover:[&>.first]:scale-105 hover:border-[#2563EB] rounded-xl cursor-pointer ${
                  index === 0
                    ? "col-span-3 h-full  sm:col-span-2 row-span-1 sm:row-span-2"
                    : "col-span-3 row-span-1 sm:col-span-1"
                }`}>
                <div className="flex first justify-center items-center h-full  w-full transition-all">
                  {/* <img src="/assets/hat-1.avif" alt="" /> */}
                </div>
                <div
                  className={`${index === 0 ? "max-w-56 md:max-w-56 sm:max-w-72 sm:top-7" : "sm:bottom-7 max-w-40"}  absolute "bg-gradient-to-r from-white border bottom-7   backdrop-blur-sm  to-[#CACACA] bg-transparent flex  px-1 py-1 justify-center items-center h-[40px] animate-pulse w-[200px]  left-7  text-md p gap-3 rounded-full font-semibold text-black`}>
                  <h1 className=" w-1/2 bg-gray-300 h-2"></h1>
                  <Button
                    variant="default"
                    className="rounded-full hover:text-black hover:bg-white h-fit w-fit p-2 bg-[#2562E9] text-white"></Button>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Skeleton;
