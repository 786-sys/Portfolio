import { Link } from "react-router-dom";


export const Skillitem = () => {
  return (
    <div className="bg-gray-950 min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full bg-gray-900 text-gray-100 rounded-2xl shadow-2xl p-10">
        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white border-b-4 border-gray-700 inline-block pb-1 mb-6">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Programming */}
            <div className="bg-gray-800 shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-white mb-3">
                Programming & Problem Solving
              </h3>
              <p className="text-gray-300 leading-relaxed">
                C++ (Advanced), Data Structures & Algorithms (C++ – problem
                solving, competitive programming)
              </p>
            </div>

            {/* Web Development */}
            <div className="bg-gray-800 shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-white mb-3">
                Web Development
              </h3>
              <p>
                <b>Frontend:</b> HTML5, CSS3, JavaScript (ES6+), React.js
              </p>
              <p>
                <b>Backend:</b> Node.js, Express.js
              </p>
              <p>
                <b>Databases:</b> MongoDB, SQL
              </p>
              <p>
                <b>Version Control:</b> Git, GitHub
              </p>
            </div>

            {/* Development Expertise */}
            <div className="bg-gray-800 shadow-lg rounded-2xl p-6 hover:shadow-xl transition md:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-3">
                Development Expertise
              </h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>Full-Stack Web Development (MERN)</li>
                <li>API Integration & RESTful Services</li>
                <li>
                  Secure Authentication, Data Encryption, and CRUD operations
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold text-white border-b-4 border-gray-700 inline-block pb-1 mb-6">
            Projects
          </h2>

          <div className="space-y-8">
            {/* Dictionary Project */}
            <div className="bg-gray-800 shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Dictionary Web Application (API Integration)
              </h3>
              <p className="text-gray-400 mb-2">
                <b>Tech Stack:</b> HTML, CSS, JavaScript, REST API
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>
                  Developed a responsive front-end application integrating with
                  a dictionary API.
                </li>
                <li>
                  Fetched real-time meanings, synonyms, antonyms, and
                  pronunciations.
                </li>
                <li>Implemented dynamic rendering for a seamless UX.</li>
                <li>
                  Strengthened skills in{" "}
                  <b>API fetching, JSON handling, and responsive UI design.</b>
                </li>
              </ul>
            </div>

            {/* Password Manager */}
            <div className="bg-gray-800 shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Password Manager (Full-Stack Application)
              </h3>
              <p className="text-gray-400 mb-2">
                <b>Tech Stack:</b> MERN (MongoDB, Express.js, React, Node.js)
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>
                  Built a secure password manager to safely store and retrieve
                  credentials.
                </li>
                <li>
                  Implemented authentication, encryption, and role-based access
                  control.
                </li>
                <li>
                  Designed a responsive React UI with secure backend APIs.
                </li>
                <li>
                  Gained hands-on experience in{" "}
                  <b>CRUD operations, encryption, and deployment.</b>
                </li>
              </ul>
            </div>
            {/* Real Time Chat App */}
            <div className="bg-gray-800 shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Real-Time Chat Application (Full-Stack Web App)
                <Link className="text-blue-200 hover:text-gray-200" to="https://frontend-real-time-chat.onrender.com/"> Know More</Link>
              </h3> 
              <p className="text-gray-400 mb-2">
                <b>Tech Stack:</b> MERN (MongoDB, Express.js, React, Node.js),
                WebSockets (Socket.IO)
              </p>

              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>
                  Developed a real-time messaging web application using{" "}
                  <b>WebSockets (Socket.IO)</b> for instant communication.
                </li>
                <li>
                  Implemented <b>one-to-one and group chat</b> functionality
                  with real-time message delivery.
                </li>
                <li>
                  Added <b>online/offline user status tracking</b> and{" "}
                  <b>typing indicators</b> for improved user experience.
                </li>
                <li>
                  Built secure authentication using JWT and protected routes for
                  chat access.
                </li>
                <li>
                  Designed a responsive React-based UI with efficient state
                  management.
                </li>
                <li>
                  Stored chat messages, user data, and conversation history in{" "}
                  <b>MongoDB</b>.
                </li>
                <li>
                  Implemented features such as{" "}
                  <b>
                    read receipts, message timestamps, and real-time
                    notifications
                  </b>
                  .
                </li>
                <li>
                  Deployed the application with optimized backend APIs and
                  socket event handling.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
