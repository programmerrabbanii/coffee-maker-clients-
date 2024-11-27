import logoFooter from "../assets/images/more/logo1.png"; // লোগো ইমেজ

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#3f2a1c] to-[#7a4f28] text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <img src={logoFooter} alt="Logo" className="h-24 mb-4" />
          <h2 className="text-3xl font-semibold font-serif">Espresso Emporium</h2>
          <p className="text-lg mt-2 text-center lg:text-left max-w-sm">
            Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
          </p>
        </div>

        {/* Social Links Section */}
        <div className="flex gap-8 my-4 lg:my-0">
          <a href="#" className="text-4xl hover:text-gray-300 transition">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-4xl hover:text-gray-300 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-4xl hover:text-gray-300 transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-4xl hover:text-gray-300 transition">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Contact Info Section */}
        

        {/* Contact Form */}
        <div className="w-full mt-8 lg:mt-0 lg:w-1/3">
          <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full py-2 px-4 rounded-md shadow-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full py-2 px-4 rounded-md shadow-md"
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered w-full py-2 px-4 rounded-md shadow-md"
            ></textarea>
            <button className="btn btn-primary w-full py-3 rounded-md shadow-md text-white hover:bg-[#f7a300]">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="text-center mt-10 border-t pt-4 text-sm opacity-70">
        <p>&copy; 2024 Dev Rabbani Sarkar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
