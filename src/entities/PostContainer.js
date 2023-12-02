import Post from '#entities/Post';
import { Container, Row } from 'react-bootstrap';
import { useGetAllPostsQuery } from '#app/api';

const PostContainer = () => {
  const { data } = useGetAllPostsQuery();
  return (
    <Container>
      <Row className="mt-3">
        {data ? data.map((post) => <Post key={post.id} post={post} />) : null}
      </Row>
    </Container>
  );
};

export default PostContainer;
