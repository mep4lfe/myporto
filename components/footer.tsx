export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-gray-900 text-gray-300">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-white">Muhamad Eko Prasetio</h2>
            <p className="mt-1">Metallurgical Engineering Student</p>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p>&copy; {currentYear} Muhamad Eko Prasetio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
