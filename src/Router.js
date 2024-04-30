import { Route, Routes } from "react-router-dom";
import listPage from "./pages/List";
import postPage from "./pages/Post";
import mainPage from "./pages/Main";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={mainPage} />
      <Route path="/list" element={listPage} />
      <Route path="/post/:id" element={postPage} />
      <Route path="/post/:id/answer" element="" />
    </Routes>
  );
}
