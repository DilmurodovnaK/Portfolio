"use client";

import { useState, useRef } from "react";

import { motion } from "framer-motion";
import { GiPhone } from "react-icons/gi";



interface UserDatas {
  username: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [userDatas, setUserDatas] = useState<UserDatas>({
    username: "",
    email: "",
    message: "",
  });
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDatas((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let messages: string[] = [];

    if (userDatas.username === "" || userDatas.username.length < 2) {
      messages.push("Name is required and must be at least 2 characters long");
    }

    if (!userDatas.email.includes("@")) {
      messages.push("Invalid email format");
    }

    if (userDatas.message.length < 1) {
      messages.push("Message is required");
    }

    if (messages.length > 0) {
      setErrorMessages(messages);
    } else {
      localStorage.setItem("userData", JSON.stringify(userDatas));
      setUserDatas({
        username: "",
        email: "",
        message: "",
      });
      if (formRef.current) {
        formRef.current.reset();
      }
     
    }
  };

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 max-w-[1300px]   text-center mx-auto"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
    <div>
        <h3 className="font-bold text-3xl text-center mb-10 mt-10">Contact</h3>
      <div className="flex justify-evenly items-start ig:flex-col ig:items-center ig:gap-y-10 ">
        <div className="mt-8 w-[600px] gap-y-5 flex flex-col justify-center items-center ig:w-[400px] ms:w-[200px]">
          <h3 className="text-2xl font-bold mb-4">Phone Number</h3>
          <button className="flex items-center justify-center text-center w-[270px] space-x-2 px-4 py-2 border border-gray-300 bg-transparent rounded-lg">
            <GiPhone/>
            <span>+998970063404</span>
          </button>
          <button className="flex items-center justify-center text-center w-[270px] space-x-2 px-4 py-2 border border-gray-300 bg-transparent rounded-lg">
            <GiPhone />
            <span>+998974503404</span>
          </button>
        </div>

        <div className="w-[600px] sm:w-[400px] ms:w-[300px]">
          <form ref={formRef} onSubmit={handleSubmit} id="form" className="bg-transparent max-w-[700px] shadow-2xl rounded-xl px-8 pt-6 pb-8">
            <div className="flex mb-4 flex-col items-start gap-y-3 ">
              <label className="block  text-lg font-bold mb-2 sm:text-sm" htmlFor="username">
                Username
              </label>
              <input
                className="shadow rounded-lg text-black border-4 w-full focus:border-indigo-900 sm:border-2 sm:py-2 sm:rounded-lg py-4 pl-5 ms:py-1 ms:pl-2 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                name="username"
                onChange={(e) => handleInputChange(e)}
                value={userDatas.username}
                placeholder="Enter your username"
              />
            </div>
            <div className="flex mb-4 flex-col items-start gap-y-3 ">
              <label className="block  text-lg font-bold mb-2 sm:text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="shadow rounded-lg text-black border-4 w-full focus:border-indigo-900 sm:border-2 sm:py-2 sm:rounded-lg py-4 pl-5 ms:py-1 ms:pl-2 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                onChange={(e) => handleInputChange(e)}
                value={userDatas.email}
                placeholder="Enter your email"
              />
            </div>
            <div className="flex mb-4 flex-col items-start gap-y-3 ">
              <label className="block  text-lg font-bold mb-2 sm:text-sm" htmlFor="message">
                Message
              </label>
              <input
                className="shadow  text-black focus:border-indigo-900 sm:border-2 sm:py-2 sm:rounded-lg border-4  rounded-lg h-20 w-full py-2 pl-5 ms:py-1 ms:pl-2 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                type="text"
                onChange={(e) => handleInputChange(e)}
                value={userDatas.message}
                name="message"
                placeholder="Enter your message"
              />
            </div>
            {errorMessages.length > 0 && (
              <div className="text-red-500">
                {errorMessages.map((message, index) => (
                  <p key={index}>{message}</p>
                ))}
              </div>
            )}
            <div className="flex items-center justify-between">
              <button
                className="hover:text-white bg-[#ece8e8] dark:bg-indigo-900 dark:hover:bg-teal-900 font-bold py-4 px-10 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </motion.section>
  );
}
