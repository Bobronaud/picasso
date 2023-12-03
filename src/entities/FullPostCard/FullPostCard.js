import { useNavigate, useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { useGetPostByIdQuery } from '#shared/api';

const FullPostCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetPostByIdQuery(id);
  return (
    data && (
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
    )
  );
};

export default FullPostCard;
