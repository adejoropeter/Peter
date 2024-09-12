
const Footer = () => {
  return (
    <footer className="px-14 w-full h-fit bg-black flex py-6 justify-between items-center">
      <div className="flex gap-3 items-center w-full">
        <div className="w-8 h-8 rounded-xl flex  bg-black">
          <img src="assets/Group.png" alt="" className="w-full h-full  " />
        </div>
        <h1 className="sm:block hidden text-lg">Personal</h1>
      </div>
      <div>{new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
