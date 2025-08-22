import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import { UserProvider } from "./context/UserContext.jsx"; //

 // <-- import UserProvider

// Pages
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import BookDetail from "./pages/BookDetail.jsx";
import Review from "./pages/Review.jsx";
import WantToRead from "./pages/WantToRead.jsx";
import Profile from "./pages/Profile.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <UserProvider> {/* <-- Wrap everything with UserProvider */}
      <Routes>
        {/* Login and Signup (no header/footer) */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Pages with Header + Footer */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/review/:id" element={<Review />} />
          <Route path="/want-to-read" element={<WantToRead />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wantToReadbooks/:id" element={<BookDetail />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
