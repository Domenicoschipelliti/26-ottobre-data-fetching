import { Component } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    commenti: [],
  };

  FeedbackArea = () => {
    try {
      fetch("https://striveschool-api.herokuapp.com/api/comments/0316438960", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGQyNGY2ZTNkZDAwMTQ5NWU0MzUiLCJpYXQiOjE2OTgzMTk2NTIsImV4cCI6MTY5OTUyOTI1Mn0.jnxrboAz7lzLuBfwHtCzGBSV82saRHrcMHzB2aaIpNI",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Errore nella Get");
          }
        })

        .then((com) => {
          this.setState({
            commenti: com,
          });
          console.log("comment", com);
        })

        .catch((err) => {
          console.log("errore", err);
        });
    } catch (error) {
      console.log("errore", error);
    }
  };

  componentDidMount() {
    this.FeedbackArea();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={4}>
            {this.state.commenti.map((com) => {
              return (
                <ListGroup key={com.elementId}>
                  <ListGroup.Item>{com.comment}</ListGroup.Item>
                  <ListGroup.Item>{com.rate}</ListGroup.Item>
                </ListGroup>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CommentArea;
