import { Github, Instagram, Twitter } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [inputDetails, setInputDetails] = useState({
    name: "",
    desc: "",
    email: "",
    website: "",
  });

  // State to handle form submission errors
  const [error, setError] = useState<string | null>(null);

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check for empty fields
    if (
      inputDetails.name.trim() === "" ||
      inputDetails.email.trim() === "" ||
      inputDetails.desc.trim() === ""
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    // If no errors, reset error state and proceed with form submission
    setError(null);
    e.currentTarget.submit();
  };

  return (
    <form
      action="https://getform.io/f/7c0179c6-6abd-4620-b8cd-7b79145a1801"
      method="POST"
      id="contact"
      onSubmit={handleSubmit} // Handle form submission
      className="bg-blue600 bg-white scroll-mt-14 text-black justify-between px-6 sm:p-14 h-fit py-10 w-full flex flex-col lg:flex-row items-center gap-5 sm:gap-20">
      <div className="flex flex-col justify-center gap-4 w-full flex-1">
        <div className="w-full h-[40px] border bg-black border-black px- py- rounded-[4px]">
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputDetails((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            placeholder="Your Name"
            value={inputDetails.name}
            type="text"
            name="firstname"
            className="w-full px-2 text-lg h-full outline-none bg-white"
          />
        </div>
        <div className="w-full h-[40px] border bg-black border-black px- py- rounded-[4px]">
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputDetails((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            placeholder="Your Email"
            value={inputDetails.email}
            type="email"
            name="email"
            className="w-full px-2 text-lg h-full outline-none bg-white"
          />
        </div>
        <div className="w-full h-[40px] border bg-black border-black px- py- rounded-[4px]">
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputDetails((prev) => ({
                ...prev,
                website: e.target.value,
              }))
            }
            placeholder="Your Website (if exists)"
            value={inputDetails.website}
            type="text"
            name="website"
            className="w-full px-2 text-lg h-full outline-none bg-white"
          />
        </div>
        <div className="w-full border border-black px- py- rounded-[4px]">
          <textarea
            value={inputDetails.desc}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setInputDetails((prev) => ({
                ...prev,
                desc: e.target.value,
              }))
            }
            placeholder="How can I help?"
            name="message"
            className="w-full outline-none px-2 text-lg"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}{" "}
        {/* Display error message */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="w-fit cursor-pointer bg-black p-2 h-fit rounded-[2px] text-white">
            Get in touch
          </button>
          <a
            href="https://x.com/dev_apa"
            target="_blank"
            className="cursor-pointer w-fit bg-black p-2 h-fit rounded-[2px] text-white">
            <Twitter />
          </a>
          <a
            href="https://www.instagram.com/adej_apa"
            target="_blank"
            className="cursor-pointer w-fit bg-black p-2 h-fit rounded-[2px] text-white">
            <Instagram />
          </a>
          <a
            href="https://github.com/adejoropeter"
            target="_blank"
            className="cursor-pointer w-fit bg-black p-2 h-fit rounded-[2px] text-white">
            <Github />
          </a>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <h3 className="text-2xl font-bold">
          Let{" "}
          <span className="text-stroke text-stroke-2 text-stroke-black text-white font-bold">
            talk
          </span>{" "}
          for <br /> Something special
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
          veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Tenetur, voluptate?
        </p>
        <p className="text-2xl font-bold">
          adejoropeter25@gmail.com <br /> 08128224734
        </p>
      </div>
    </form>
  );
};

export default Contact;
