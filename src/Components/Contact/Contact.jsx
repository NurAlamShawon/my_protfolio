import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yourServiceID", // Replace with your Service ID
        "template_yourTemplateID", // Replace with your Template ID
        e.target,
        "user_yourPublicUserID" // Replace with your User ID
      )
      .then(
        (result) => {
          console.log(result.text); // Log the success response
          alert("Message sent successfully!");
          e.target.reset(); // Reset the form after sending the message
        },
        (error) => {
          console.error("Error sending email:", error); // Log the error for debugging
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border p-2 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border p-2 w-full"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="border p-2 w-full h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
