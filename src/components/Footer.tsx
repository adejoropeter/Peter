
const Footer = () => {
  return (
    <footer className="px-14 w-full h-fit bg-black flex py-6 justify-between items-center">
      <div className="w-full flex justify-between">
        <h2 className="font-semibold text-lg">Personal</h2>
      </div>
      <div>{new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
