import "react";
import Title from "./Title";
import assets from "@/assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react"

const Contacts = () => {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", accessKey);
    try {
          const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
        toast.success(`Message sent successfully`)
        event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
    }
    } catch (error) {
              toast.error(error.message)

    }
  
  };

  return (
    <>
      <section
        id="contacts"
        className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
      >
        <Title
          title="Reach out to us"
          desc="From strategy to execution, 
        we craft digital solutions that move your business forward."
        />
        <motion.form initial={{opacity:0 , y:20 }} whileInView={{opacity:1 ,y:0 }} transition={{duration:0.4 ,delay:0.4}} viewport={{once: true }}
          onSubmit={onSubmit}
          className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-3xl w-full "
        >
          <div>
            <label htmlFor="name" className="block text-sm mb-2 font-medium">
              Your Name
            </label>
            <div className="relative flex pl-3 rounded-lg border border-gray-400 dark:border-gray-700   ">
              <img
                src={assets.person_icon}
                className="absolute left-3 top-3"
                alt="personal icon"
              />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full p-3 text-sm outline-none bg-transparent pl-7"
              />
            </div>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm mb-2 font-medium">
              Your Email
            </label>
            <div className="relative flex pl-3 rounded-lg border border-gray-400 dark:border-gray-700   ">
              <img
                src={assets.email_icon}
                className="absolute left-3 top-3"
                alt="email icon"
              />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                name="email"
                className="w-full p-3 text-sm outline-none bg-transparent pl-7"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm mb-2 font-medium">
              Message
            </label>
            <div>
              <textarea
                id="message"
                rows={8}
                name="message"
                placeholder="Enter your message"
                required
                className="w-full bg-transparent p-3 text-sm outline-none rounded-lg
                 border border-gray-300 dark:border-gray-600"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="
    w-fit
    flex items-center
    justify-center
    gap-2
    bg-primary
    text-white
    text-sm
    px-10
    py-3
    rounded-full
    cursor-pointer
    hover:scale-105
    transition-all
  "
          >
            Submit
            <img src={assets.arrow_icon} className="w-4" alt="" />
          </button>
        </motion.form>
        {/* <p className="sm:col-span-2 text-center">{result}</p> */}
      </section>
    </>
  );
};

export default Contacts;
