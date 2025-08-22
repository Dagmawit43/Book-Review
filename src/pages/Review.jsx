import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Rating from "../components/Rating";

// Mock current user (from your Profile)
const currentUser = {
  username: "JohnDoe",
  profile: "/images/hl.png",
};

const Review = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !review) return alert("Please add a rating and review.");

    // Create new review using current user's profile
    const newReview = {
      user: currentUser.username,
      profile: currentUser.profile,
      rating,
      text: review,
    };

    // Navigate back to BookDetail with the new review
    navigate(`/book/${bookId}`, { state: { newReview } });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Write a Review</h1>

      {/* Rating Stars */}
      <label className="block mb-2 font-semibold">Rate this book:</label>
      <Rating value={rating} onChange={(val) => setRating(val)} />

      {/* Review Text */}
      <textarea
        className="w-full border rounded p-2 mt-4"
        rows="5"
        placeholder="Write your review here..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Submit Review
      </button>
    </div>
  );
};

export default Review;
