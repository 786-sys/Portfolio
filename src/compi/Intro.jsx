export const Intro = () => {
  return (
    <div className="flex justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12 px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-gray-800 bg-opacity-90 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
        
        {/* Left side - maybe image or accent */}
        <div className="md:w-1/3 bg-gradient-to-b from-indigo-500 to-indigo-700 flex items-center justify-center p-8">
          <span className="text-white font-bold text-2xl md:text-3xl">Hello, I'm Taha</span>
        </div>

        {/* Right side - content */}
        <div className="md:w-2/3 p-8 text-gray-100 text-sm md:text-base leading-relaxed space-y-4">
          <p>
            I am <span className="font-bold text-indigo-400">Taha Sayyed</span>, a passionate software developer currently aspiring for an <span className="font-bold text-indigo-400">SDE3 role</span>. I enjoy tackling complex challenges through <span className="font-semibold text-indigo-300">Data Structures and Algorithms using C++</span>.
          </p>
          <p>
            I gain practical experience through internships with organizations like <span className="font-semibold text-indigo-300">SR Counselling</span>, helping me understand real-world software development workflows.
          </p>
          <p>
            I am highly motivated to learn and expand my expertise in emerging technologies like <span className="font-bold text-indigo-400">AI and ML</span>, exploring innovative solutions that make a meaningful impact.
          </p>
          <p>
            My interest in <span className="font-semibold text-indigo-300">cloud computing and distributed systems</span> drives me to build scalable and efficient applications. I thrive in collaborative environments that require creativity and analytical thinking.
          </p>
        </div>

      </div>
    </div>
  )
}
