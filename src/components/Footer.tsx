
function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Music School</h2>
            <p className="text-gray-400">
              Your journey to mastering music starts here. Join our community and
              learn from the best instructors.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="list-none">
              <li className="mb-2"><a href="/" className="hover:underline">Home</a></li>
              <li className="mb-2"><a href="/about" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="/services" className="hover:underline">Services</a></li>
              <li className="mb-2"><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-400 mb-2">123 Music Lane, Suite 100</p>
            <p className="text-gray-400 mb-2">Music City, USA</p>
            <p className="text-gray-400 mb-2">Email: info@musicschool.com</p>
            <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">&copy; 2024 Music School. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
