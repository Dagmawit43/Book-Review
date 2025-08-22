import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  // Mock user data
  const user = {
    profile: "/images/h-1.png",
    username: "User Name",
    gender: "Male",
    country: "Country",
    birthday: "DD/MM/YYYY",
    genres: "Romance, Mystery/Thriller, Fantasy, Science Fiction, +5 More",
  };

  const handleLogout = () => {
    // if you have auth, clear it here (ex: localStorage.removeItem("token"))
    navigate("/"); // redirect to home page
  };

  return (
    <div className="bg-[#f5fce6] min-h-screen flex flex-col items-center">
      {/* Top navigation spacing */}
      <h1 className="text-2xl font-bold text-blue-700 mt-6 mb-4">Profile</h1>

      {/* Profile Card */}
      <div className="bg-[#fdfaf3] shadow-md rounded-lg w-11/12 md:w-3/4 p-6 flex flex-col md:flex-row gap-6 items-start">
        {/* Left - Avatar */}
        <div className="flex flex-col items-center">
          <img
            src={user.profile}
            alt="Profile"
            className="w-32 h-32 rounded-lg object-cover shadow"
          />
          <p className="text-sm text-gray-600 mt-3">
            {user.gender}, {user.country}
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-2">
            📅 Birth Day: {user.birthday}
          </p>
        </div>

        {/* Right - User Info */}
        <div className="flex-1">
          {/* Top Row */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{user.username}</h2>
            <Link
              to="/edit-profile"
              className="px-4 py-2 rounded-full bg-blue-600 text-white shadow hover:bg-blue-700 transition"
            >
              Edit Profile
            </Link>
          </div>

          {/* Favorite Genres */}
          <p className="text-gray-700">
            <span className="font-bold text-green-700">Favorite GENRES:</span>{" "}
            {user.genres}
          </p>

          {/* My Bookshelves */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">My BookShelves</h3>
            <div className="flex gap-4">
              <button className="bg-blue-900 text-white px-6 py-2 rounded-md shadow hover:bg-blue-800 transition">
                Read (64)
              </button>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-md shadow hover:bg-blue-800 transition">
                Want To Read (89)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-10 px-10 py-2 bg-blue-900 text-white rounded-full shadow hover:bg-blue-800 transition"
      >
        Logout
      </button>
    </div>
  );
}
