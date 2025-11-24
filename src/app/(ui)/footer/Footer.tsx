export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">YaadVibe</h3>
          <p>Your gateway to the best of Jamaica. Discover, book, and vibe.</p>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Explore</h3>
          <ul className="space-y-2">
            <li>Parishes</li>
            <li>Flights</li>
            <li>Events</li>
            <li>Tours & Attractions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-6">
        © {new Date().getFullYear()} YaadVibe Ecosystem — All Rights Reserved
      </div>
    </footer>
  );
}
