import { useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Mock book data (replace with API later)
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "/images/h-1.webp",
    description:
      "A story of the mysterious Jay Gatsby and his love for Daisy Buchanan, set in the Jazz Age.",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "/images/h-2.webp",
    description: "A powerful story about racial injustice in the Deep South.",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    image: "/images/h-3.webp",
    description: "A dystopian novel about totalitarianism and surveillance.",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "/images/h-4.webp",
    description:
      "A classic romance novel exploring love, society, and misunderstandings in 19th-century England.",
  },
  {
    id: 5,
    title: "Moby Dick",
    author: "Herman Melville",
    image: "/images/h-5.webp",
    description:
      "The epic tale of Captain Ahab's obsessive quest to hunt the white whale, Moby Dick.",
  },
];

const mockReviews = [
  { user: "Alice", profile: "/images/img_6.jpg", rating: 5, text: "Absolutely loved it!" },
  { user: "Bob", profile: "/images/img_7.jpg", rating: 4, text: "Very thought-provoking." },
];

export default function BookDetail() {
  const { id } = useParams();
  const location = useLocation();
  const book = books.find((b) => b.id === parseInt(id));
  const [status, setStatus] = useState(null); // "want" or "read"
  const [reviews, setReviews] = useState(mockReviews);

  // Add new review from Review page
  useEffect(() => {
    if (location.state?.newReview) {
      const exists = reviews.some(r => r === location.state.newReview);
      if (!exists) {
        setReviews((prev) => [...prev, location.state.newReview]);
        window.history.replaceState({}, document.title); // prevent duplicate on refresh
      }
    }
  }, [location.state, reviews]);

  if (!book) return <p className="p-6">Book not found.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Book Info */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={book.image}
          alt={book.title}
          className="w-48 h-64 object-cover rounded shadow"
        />
        <div>
          <h1 className="text-2xl font-bold">{book.title}</h1>
          <p className="text-gray-600 mb-2">by {book.author}</p>
          <p className="text-gray-700 mb-4">{book.description}</p>

          {/* Status Buttons */}
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => setStatus("want")}
              className={`px-4 py-2 rounded ${
                status === "want" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              ✅ Want to Read
            </button>
            <button
              onClick={() => setStatus("read")}
              className={`px-4 py-2 rounded ${
                status === "read" ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
            >
              📖 Already Read
            </button>
          </div>

          {/* Write Review */}
          <Link
            to={`/review/${book.id}`}
            className="text-blue-600 hover:underline font-medium"
          >
            ✍️ Rate the book and Write a Review
          </Link>
        </div>
      </div>

      {/* Reviews */}
      <h2 className="text-xl font-bold mt-8 mb-4">⭐ Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet. Be the first to review!</p>
      ) : (
        reviews.map((r, i) => (
          <div key={i} className="flex gap-3 items-start mb-4">
            <img
              src={r.profile}
              alt={r.user}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{r.user}</p>
              <p className="text-yellow-500">{"⭐".repeat(r.rating)}</p>
              <p className="text-gray-700">{r.text}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
