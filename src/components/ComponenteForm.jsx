

import{Form,Button, Container, Row, Col} from "react-bootstrap"

const ComponenteForm=()=>{
    return(
      <Container>
        <Row>
            <Col md={12}>
            <Form>
        <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Comment" />
        <Form.Select aria-label="Default select example" className="mb-4">
         <option>Dai un voto da 1 a 5</option>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
    </Form.Select>
      <div className="d-flex justify-content-center">
        <Button>Submit</Button>
      </div>
       
      </Form.Group>
      </Form>
            </Col>
        </Row>
      </Container>
        
    )
}


export default ComponenteForm