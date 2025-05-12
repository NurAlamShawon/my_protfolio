import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_thlna7w", // Your actual Service ID
        "template_86zqcde", // Your actual Template ID
        e.target, // Pass the form directly
        "284F7HWLK4ZKXycci" // Use your actual EmailJS public API key here
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div
      className="max-w-screen-xl mx-auto pt-30  mt-20 "
      id="contact"
    >
      <h1 className="text-black font-bold text-5xl text-center pt-10 pb-28 oswald ">
        Contact
      </h1>
      <div className="xl:flex items-center bg-[#EAE4D5] p-10 rounded-2xl">
        <div>
          <img
            src="https://i.postimg.cc/DwLwsLKb/image-removebg-preview-8.png"
            alt=""
          />
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className=" p-3 w-full rounded-2xl shadow-2xl bg-[#F2F2F2] text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className=" p-3 w-full rounded-2xl shadow-2xl  bg-[#F2F2F2] text-black"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className=" p-3 w-full h-32 rounded-2xl shadow-2xl  bg-[#F2F2F2] text-black"
            ></textarea>

            <input
              type="submit"
              value="Submit"
              className="btn btn-info rounded-2xl  text-white px-4 py-2 w-full shadow-2xl"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
