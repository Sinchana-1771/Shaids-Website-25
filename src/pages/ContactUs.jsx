import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster, LoaderIcon } from "react-hot-toast";
import Lottie from "lottie-react";
import contact from "../assets/images/contact.json";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Common/Footer";
import { Navbar } from "../components/Navbar";
import axios from "axios";

const ContactUs = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const maxLength = 300;

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { email, fullName, phoneNumber, Message } = data;
      await axios.post(
        import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/api/contact",
        { fullName, email, phoneNumber, Message },
      );
      reset();
      toast.success("Sent Successfully!");
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar show={true} />

      {/* Back Button */}
      {/* <button
        onClick={() => navigate(-1)}
        className="fixed top-5 left-20 z-50 flex items-center text-white hover:text-[#b19eff] transition-colors"
      >
        <ArrowLeft className="w-6 h-6 mr-2" />
        <span className="hidden sm:inline font-semibold"></span>
      </button> */}

      {/* Main Container */}
      <div className="bg-bgGradient text-white font-Outfit flex flex-col h-full px-6 xl:flex-row justify-around items-center sm:px-16 py-20 xl:px-32 overflow-hidden">
        <Toaster position="top-right" reverseOrder={false} />

        {/* Left Content */}
        <div className="flex flex-col gap-4 sm:text-left xl:w-1/2">
          <h1 className="font-NordMedium text-3xl sm:text-4xl md:text-5xl">
            Let's get in touch.
          </h1>
          <p className="text-sm sm:text-lg md:text-xl">
            Or just reach out manually to{" "}
            <span className="text-[#4CC3E6] underline">
              shaids_dmce@dmce.ac.in
            </span>
          </p>
          <Lottie
            animationData={contact}
            className="hidden xl:block size-3/4"
            loop={true}
          />
        </div>

        {/* Contact Form */}
        <div className="flex flex-col w-full xl:w-1/3 mt-10 xl:mt-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* Full Name */}
            <span className="flex flex-col gap-2">
              Full name
              <span
                className={`custom-input flex p-2 gap-2 md:py-3 border rounded-lg ${
                  errors.fullName ? "border-red-500" : "border-gray-500"
                }`}
              >
                <AccountCircleOutlinedIcon />
                <input
                  type="text"
                  className="bg-transparent outline-none w-full"
                  placeholder="Enter your full name..."
                  {...register("fullName", { required: true })}
                />
              </span>
              {errors.fullName && (
                <p className="text-red-500 text-sm">Name is required!</p>
              )}
            </span>

            {/* Email */}
            <span className="flex flex-col gap-2">
              Email
              <span
                className={`custom-input flex p-2 gap-2 md:py-3 border rounded-lg ${
                  errors.email ? "border-red-500" : "border-gray-500"
                }`}
              >
                <EmailOutlinedIcon />
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="bg-transparent outline-none w-full"
                  {...register("email", { required: true })}
                />
              </span>
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required!</p>
              )}
            </span>

            {/* Phone Number */}
            <span className="flex flex-col gap-2">
              Phone Number
              <span
                className={`custom-input flex p-2 gap-2 md:py-3 border rounded-lg ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-500"
                }`}
              >
                <CallOutlinedIcon />
                <input
                  type="number"
                  placeholder="+91"
                  className="bg-transparent outline-none w-full appearance-none"
                  {...register("phoneNumber", {
                    required: true,
                    maxLength: 10,
                    minLength: 10,
                    pattern: /^[0-9]+$/,
                  })}
                />
              </span>
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  Phone number must be 10 digits!
                </p>
              )}
            </span>

            {/* Message */}
            <span className="flex flex-col gap-2">
              Message
              <span
                className={`custom-input flex flex-col p-2 gap-2 md:py-3 border rounded-lg ${
                  errors.Message ? "border-red-500" : "border-gray-500"
                }`}
              >
                <textarea
                  id="message"
                  rows="5"
                  maxLength={maxLength}
                  placeholder="Enter your message here..."
                  className="bg-transparent outline-none w-full resize-none"
                  {...register("Message", {
                    required: true,
                    maxLength: maxLength,
                  })}
                  onChange={(e) => setMessageLength(e.target.value.length)}
                />
                <span className="text-sm text-gray-400 self-end">
                  {messageLength}/{maxLength}
                </span>
              </span>
              {errors.Message && (
                <p className="text-red-500 text-sm">Message is required!</p>
              )}
            </span>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#4CC3E6]  border-blue-900 w-max px-4 py-2 rounded-lg self-end cursor-pointer flex items-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <LoaderIcon /> Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
