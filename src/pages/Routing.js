import { Routes, Route } from 'react-router-dom';
import MainPage from '#pages/MainPage';
import PostPage from '#entities/Post';

const Routing = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="1" element={<PostPage />} />
  </Routes>
);

export default Routing;
