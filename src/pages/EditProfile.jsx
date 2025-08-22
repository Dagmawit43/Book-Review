import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    profile: "/images/h-1.png",
    username: "JohnDoe",
    gender: "Male",
    genre: "Fiction",
    birthday: "1998-05-12",
    country: "Ethiopia",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile" && files.length > 0) {
      setUser({ ...user, profile: URL.createObjectURL(files[0]) });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    // In real app, save to backend here
    alert("Profile updated!");
    navigate("/profile"); // go back to profile page
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded mt-8">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <form onSubmit={handleSave} className="flex flex-col space-y-4">
        <div className="flex flex-col items-center">
          <img
            src={user.profile}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-2"
          />
          <label className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
            Change Photo
            <input
              type="file"
              name="profile"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />
          </label>
        </div>

        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="gender"
          value={user.gender}
          onChange={handleChange}
          placeholder="Gender"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="genre"
          value={user.genre}
          onChange={handleChange}
          placeholder="Favorite Genre"
          className="p-2 border rounded"
        />
        <input
          type="date"
          name="birthday"
          value={user.birthday}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="country"
          value={user.country}
          onChange={handleChange}
          placeholder="Country"
          className="p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
