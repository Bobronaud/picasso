import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { useGetAllPostsQuery } from '#shared/api';
import Post from '#entities/Post/Post';

const PostContainer = () => {
  const [postStart, setPostStart] = useState(0);
  const { data } = useGetAllPostsQuery({
    start: postStart,
  });
  const { ref: firstCard, inView: inViewFirstCard } = useInView({
    threshold: 0.1,
  });
  const { ref: lastCard, inView: inViewLastCard } = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
    if (inViewFirstCard) {
      setPostStart((prev) => (prev === 0 ? prev : prev - 1));
    }
    if (inViewLastCard) {
      setPostStart((prev) => prev + 1);
    }
  }, [inViewFirstCard, inViewLastCard]);

  return (
    data && (
      <Container>
        <Row className="mt-3">
          {data.map((post, index, arr) =>
            index === 0 ? (
              <div key={post.id} ref={firstCard}>
                <Post post={post} />
              </div>
            ) : index === arr.length - 1 ? (
              <div key={post.id} ref={lastCard}>
                <Post post={post} />
              </div>
            ) : (
              <div key={post.id}>
                <Post post={post} />
              </div>
            ),
          )}
        </Row>
      </Container>
    )
  );
};

export default PostContainer;
