import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import listPage from "./pages/List";
import postPage from "./pages/Post";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/list" element={listPage} />
      <Route path="/post/:id" element={postPage} />
      <Route path="/post/:id/answer" element="" />
    </Routes>
  );
}
