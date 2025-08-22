import React, { useState } from "react";
import { Link } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "/images/h-1.webp",
    rating: 4.5,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "/images/h-2.webp",
    rating: 4.8,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    image: "/images/h-3.webp",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "/images/h-4.webp",
    rating: 4.8,
  },
  {
    id: 5,
    title: "Moby Dick",
    author: "Herman Melville",
    image: "/images/h-5.webp",
    rating: 4.2,
  },
];

const suggestions = [
  { id: 1, image: "/images/h-6.png" },
  { id: 2, image: "/images/h-7.png" },
  { id: 3, image: "/images/h-8.png" },
  { id: 4, image: "/images/h-9.png" },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#f5f5f5] w-full min-h-screen">

      {/* Search bar */}
      <div className="flex justify-center mt-2 mb-6 px-4">
        <input
          type="text"
          placeholder="Search books or authors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-3 rounded-full shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
        />
      </div>

      {/* Main book cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
        {filteredBooks.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`}>
            <div className="relative bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-300 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black/50 backdrop-blur-sm text-white">
                <h2 className="text-lg font-bold">{book.title}</h2>
                <p className="text-sm">{book.author}</p>
                <div className="flex mt-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(book.rating)
                          ? "text-yellow-400"
                          : "text-gray-400"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.96c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.285-3.96a1 1 0 00-.364-1.118L2.045 9.387c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.96z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Suggestions */}
      <div className="mt-8 px-2">
        <h3 className="text-xl font-semibold mb-4">Suggestions</h3>
        <div className="flex gap-4 overflow-x-auto">
          {suggestions.map((s) => (
            <Link key={s.id} to={`/book/${s.id}`}>
              <div className="flex-none w-32 h-48 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src={s.image}
                  alt={`Suggestion ${s.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
