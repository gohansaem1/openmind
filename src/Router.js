import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import ListPage from "./pages/List";
import PostPage from "./pages/Post";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="/post/:id/answer" element="" />
    </Routes>
  );
}
