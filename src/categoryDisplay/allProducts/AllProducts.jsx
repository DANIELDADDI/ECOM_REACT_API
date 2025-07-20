import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useEffect } from "react";

function AllProducts() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
        //   setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading user data...</p>;

  return (
    <Container>
      <Row>
        {product.map((pro) => (
          <Col key={pro.id} xs={6} sm={6} md={4} lg={3}>
            <Card style={{ maxWidth: "18rem" }}>
              <Card.Img
                variant="top"
                src={pro.image}
                style={{ width: "80%", height: 200, margin: "auto" }}
              />
              <Card.Body className="d-grid">
                <Card.Title style={{ fontSize: 12 }}>{pro.title}</Card.Title>
                <Card.Text> ${pro.price}</Card.Text>
                <Button
                  variant="primary"
                  id="pro.id"
                  className="btn-block btn-lg"
                  style={{ fontSize: 12 }}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}

        {/* <Col xs={6} sm={6} md={4} lg={3}>
          <Card style={{ maxWidth: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3}>
          <Card style={{ maxWidth: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3}>
          <Card style={{ maxWidth: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </Container>
  );
}

export default AllProducts;
