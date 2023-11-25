import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  FollowingTweet,
  ForYouTweet,
  Home,
  Login,
  Signup,
  Signup_Login,
} from "../pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/for-you" element={<ForYouTweet />}></Route>
          <Route path="/following" element={<FollowingTweet />}></Route>
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup_login" element={<Signup_Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
