import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '#pages/main/MainPage';
import PostPage from '#pages/post/PostPage';

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<PostPage />} />
    </Routes>
  </BrowserRouter>
);

export default Routing;
