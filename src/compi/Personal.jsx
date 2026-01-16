import { 
  FaUser, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaLanguage 
} from "react-icons/fa";

export const Personal = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900 px-4">
      {/* Centered Card */}
      <div className="max-w-3xl w-full bg-gray-900 text-gray-100 rounded-2xl shadow-2xl p-10 border border-gray-800 hover:shadow-gray-700/50 transition">
        
        <h2 className="text-3xl font-bold text-white border-b-4 border-gray-700 inline-block pb-1 mb-8">
          Personal Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaUser className="text-gray-400" />
              <p className="text-gray-200">Taha Sayyed Karrar Husain</p>
            </div>

            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-gray-400" />
              <p className="text-gray-200">Mumbai, India</p>
            </div>

            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-gray-400" />
              <p className="text-gray-200">2023.taha.sayyed@ves.ac.in</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhone className="text-gray-400" />
              <p className="text-gray-200">(+91) 8828171231</p>
            </div>

            <div className="flex items-center space-x-3">
              <FaLinkedin className="text-blue-500" />
              <a
                href="https://linkedin.com/in/taha-sayyed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-blue-400 transition"
              >
                linkedin.com/in/taha-sayyed
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <FaGithub className="text-gray-200" />
              <a
                href="https://github.com/tahasayyed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-gray-400 transition"
              >
                github.com/tahasayyed
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <FaLanguage className="text-gray-400" />
              <p className="text-gray-200">English, Hindi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
