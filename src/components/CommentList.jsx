import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = (p) => {
  return (
    <ListGroup>
      {p.reviews.map((comenti) => {
        return <SingleComment singleReview={comenti} key={comenti._id} />;
      })}
    </ListGroup>
  );
};

export default CommentList;
