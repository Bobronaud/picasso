import { useNavigate } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

const Post = ({ post }) => {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate(`${post.id}`);
  };
  return (
    <Row className="d-flex align-items-center mx-auto mb-2 p-2 border rounded">
      <Col md={3} className="fw-bold">
        {`${post.id}. ${post.title}`}
      </Col>
      <Col className="md-auto text-truncate">{post.body}</Col>
      <Col className="d-flex justify-content-end" md={2}>
        <Button onClick={buttonHandler} variant="primary">
          Просмотр
        </Button>
      </Col>
    </Row>
  );
};

export default Post;
