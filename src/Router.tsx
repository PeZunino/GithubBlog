import { Routes, Route } from "react-router-dom";
import { Blog } from "./pages/Blog";
import { Post } from "./pages/Post";
import { DefaultLayout } from "./layouts/defaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}
