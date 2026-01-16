export const Footer = () => {
  return (
    <div className="flex items-center justify-center h-[200px] bg-black ">
      <div className="text-gray-200 ">
        <b>Contact me At &copy; 8828171231</b>
        <div className="hover:text-blue-400">
          Hey iam using Whatsapp at given Number
        </div>
        {/* github */}
        <a
          href="https://github.com/786-sys/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <i className="fa fa-github text-2xl text-gray-800 hover:text-black transition-transform duration-300 hover:scale-110"></i>
        </a>
        {/* linked in */}
        <div>
          <a
            href="https://www.linkedin.com/in/taha-sayyed-81b166368/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <i className="fa fa-linkedin text-2xl text-[#0A66C2] hover:text-blue-800 transition-transform duration-300 hover:scale-110"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
