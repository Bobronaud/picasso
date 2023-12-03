import Post from '#entities/Post/Post';
import { Container, Row } from 'react-bootstrap';
import { useGetAllPostsQuery } from '#app/api';

const PostContainer = () => {
  const { data } = useGetAllPostsQuery();
  return (
    <Container>
      <Row className="mt-3">
        {data && data.map((post) => <Post key={post.id} post={post} />)}
      </Row>
    </Container>
  );
};

export default PostContainer;
