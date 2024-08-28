import React from "react";

const Skeleton = () => {
  return (
    <main className="flex flex-col  h-fit">
      <div className="w-full sm:h-[60%] px-4 py-4 grid grid-cols-3 gap-4">
        {Array(3)
          .fill(0)
          .map((_, index) => {
            return (
              <>
                <div
                  className={`relative overflow-hidden border hover:[&>.first]:scale-105 hover:border-[#2563EB] rounded-xl cursor-pointer ${
                    index === 0
                      ? "col-span-3 sm:col-span-2 row-span-1 sm:row-span-2"
                      : "col-span-3 row-span-1 sm:col-span-1"
                  }`}>
                  <div className="flex first justify-center items-center h-full transition-all">
                    <img
                      src={"/assets/hat-1.avif"}
                      className={`${
                        index === 0 ? "sm:w-[450px]" : "sm:w-52"
                      } h- object-cover`}
                    />
                  </div>
                  <div
                    className={`
                ${index === 0 ? "sm:top-7" : "sm:bottom-7"} 
              absolute "bg-gradient-to-r from-white border bottom-7   backdrop-blur-sm  to-[#CACACA] bg-transparent flex  px-1 py-1 justify-center items-center h-fit w-fit  left-7  text-md p gap-3 rounded-full font-semibold text-black`}>
                    <h1 className="text-sm"></h1>
                    {/* <Button
                      variant="default"
                      className="rounded-full hover:text-black hover:bg-white h-fit w-fit p-2 bg-[#2562E9] text-white">
                      ${product.price.toFixed(2)} USD
                    </Button> */}
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </main>
  );
};

export default Skeleton;
