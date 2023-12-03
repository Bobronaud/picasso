import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useGetPostByIdQuery } from '#app/api';
const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetPostByIdQuery(id);
  return (
    data && (
      <Container>
        <Row className="pt-5">
          <Col lg={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Header>
                {data.id}
                {'. '}
                {data.title}
              </Card.Header>
              <Card.Body>
                <Card.Text>{data.body}</Card.Text>
                <Button onClick={() => navigate(-1)} variant="primary">
                  Назад
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  );
};

export default PostPage;
