import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#f9fbe7] text-black p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">📚 Book Review</h1>

      <nav className="flex items-center space-x-6">
        <Link to="/home" className="hover:underline">Home</Link>
        <Link to="/want-to-read" className="hover:underline">Want to Read</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>

        {/* Profile picture */}
        <Link to="/profile">
          <img
            src="/images/h-1.png"  // placeholder profile image
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-white hover:border-gray-300"
          />
        </Link>
      </nav>
    </header>
  );
}
