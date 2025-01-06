import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { toast } from 'react-toastify';


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    const accessKey = import.meta.env.REACT_APP_ACCESS_KEY;
    formData.append("access_key", accessKey);



    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult(data.message);
    }
  };
  return (
    <section className="bg-black text-white py-16 px-20" id="Contact">
     {/* Main Heading */}
    <div className="text-center mb-12">
        <h1 className="text-3xl font-bold border border-white inline-block px-8 py-1 rounded-full">
          Get in touch
        </h1>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Call Us</h2>
          <p>Call our team Mon-Fri from 8am to 5pm</p>
          <div className="flex items-center space-x-4">
            <i className="fas fa-phone-alt text-2xl"></i>
            <p>+233554289475</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">Chat With Us</h2>
          <p>Our team will respond to you shortly</p>
          <div className="flex items-center space-x-4">
            <i className="fas fa-envelope text-2xl"></i>
            <p>shoot us an email</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">Connect with us on all socials</h2>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white text-black  p-8 rounded-lg shadow-lg w-full max-w-lg ">
         <h2 className="text-xl font-bold mb-6 text-center">Contact Us</h2>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Firstname"
                className="w-1/2 p-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Lastname"
                className="w-1/2 p-3 border border-gray-300 rounded"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Leave a message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded"
            ></textarea>
            <button type="submit" className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
              {result ? result : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
