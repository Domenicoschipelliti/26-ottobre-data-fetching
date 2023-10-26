import { Component } from "react";

import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    lista: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };

  AggiuntaCommenti = (comment, value) => {
    this.setState({
      ...this.state.lista,
      [comment]: value,
    });

    // BottonSubmit = (e) => {
    //   e.preventDefault();

    //   fetch(
    //     "https://striveschool-api.herokuapp.com/api/comments/" +
    //       this.state.lista.elementId,
    //     {
    //       method: "POST",
    //       body: JSON.stringify(this.state.lista),
    //       headers: {
    //         Authorization:
    //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGQyNGY2ZTNkZDAwMTQ5NWU0MzUiLCJpYXQiOjE2OTgzMTk2NTIsImV4cCI6MTY5OTUyOTI1Mn0.jnxrboAz7lzLuBfwHtCzGBSV82saRHrcMHzB2aaIpNI",
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //     .then((res) => {
    //       console.log("risposta", res);
    //       if (res.ok) {
    //         this.setState({
    //           lista: {
    //             comment: "",
    //             rate: "",
    //             elementId: "",
    //           },
    //         });
    //       } else {
    //         throw new Error("C'è stato un errore nella get");
    //       }
    //     })
    //     .catch((err) => {
    //       console.log("errore", err);
    //     });
    // };

    <Form onSubmit={this.BottonSubmit} key={this.state.lista.elementId}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
        <Form.Control
          type="number"
          placeholder="Rate da 1 a 5"
          value={this.state.lista.rate}
        />
        <Form.Control
          type="text"
          placeholder="Comment"
          value={this.state.lista.comment}
        />
        <Button>Submit</Button>
      </Form.Group>
    </Form>;
  };
}

export default AddComment;
