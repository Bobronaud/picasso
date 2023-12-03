import { Container, Row, Col } from 'react-bootstrap';
import FullPostCard from '#entities/FullPostCard/FullPostCard';

const PostPage = () => (
  <Container>
    <Row className="pt-5">
      <Col lg={{ span: 6, offset: 3 }}>
        <FullPostCard />
      </Col>
    </Row>
  </Container>
);

export default PostPage;
