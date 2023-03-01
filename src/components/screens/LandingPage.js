import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Row className="mt-4 container">
          <Col xl={7} lg={6} md={4} className="landing-page__text mt-5">
            <h1>Get your favorite food delivered to your doorstep!</h1>
            <p>
              Order from the best restaurants in town and enjoy delicious meals
              without leaving your home.
            </p>
            <div>
              <Link to="/" className="btn btn-info">
                Order now
              </Link>
            </div>
            <hr />
          </Col>
          <Col lg={5} className="landing-page__image">
            <img
              className="border border-info"
              src="https://source.unsplash.com/random/400x300/?briyani"
              alt="Food delivery"
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h2>Popular food categories</h2>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3" sm={6} md={3}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1571407921708-4202261ea9e9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emF8fHx8fHwxNjc3MzEzODE4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
              />
              <Card.Body>
                <Card.Title>Pizza</Card.Title>
                <Card.Text>
                  Order from the best pizza places in town and enjoy a delicious
                  slice of heaven.
                </Card.Text>
                <Link to="/" className="btn btn-success">
                  Order now
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mt-3" sm={6} md={3}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1541657267876-788b156193bc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVyZ2Vyc3x8fHx8fDE2NzczMTM3NzI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
              />
              <Card.Body>
                <Card.Title>Burgers</Card.Title>
                <Card.Text>
                  Sink your teeth into a juicy burger from the best burger
                  joints in town.
                </Card.Text>
                <Link to="/" className="btn btn-success">
                  Order now
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mt-3" sm={6} md={3}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8c3VzaGl8fHx8fHwxNjc3MzEzNzMy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
              />
              <Card.Body>
                <Card.Title>Sushi</Card.Title>
                <Card.Text>
                  Enjoy fresh and delicious sushi from the best Japanese
                  restaurants in town.
                </Card.Text>
                <Link to="/" className="btn btn-success">
                  Order now
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mt-3" sm={6} md={3}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1642821373181-696a54913e93?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8aHlkZXJhZGktYnJpeWFuaXx8fHx8fDE2NzczMTM2NjE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
              />
              <Card.Body>
                <Card.Title>Chicken Briyani</Card.Title>
                <Card.Text>
                  Order from the best Chicken Briyani in town and enjoy a
                  delicious slice of heaven.
                </Card.Text>
                <Link to="/" className="btn btn-success">
                  Order now
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mt-3" sm={6} md={3}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1569058242261-35d2acbc5675?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bm9vZGxlfHx8fHx8MTY3NzMxMzg5MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
              />
              <Card.Body>
                <Card.Title>Noodles</Card.Title>
                <Card.Text>
                  Order from the best noddles in town and enjoy a delicious
                  slice of heaven.
                </Card.Text>
                <Link to="/" className="btn btn-success">
                  Order now
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col className="mt-3" sm={6} md={3}>
            <Card>
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/random/500x400/?seafood"
              />
              <Card.Body>
                <Card.Title>Sea Food</Card.Title>
                <Card.Text>
                  Order from the best Sea food in town and enjoy a delicious
                  slice of heaven.
                </Card.Text>
                <Link to="/" className="btn btn-success">
                  Order now
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-3" sm={6} md={3}>
            <Card>
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/random/500x400/?chocolate"
              />
              <Card.Body>
                <Card.Title>Chocolate</Card.Title>
                <Card.Text>
                  Order from the best Chocolate in town and enjoy a delicious
                  slice of heaven.
                </Card.Text>
                <Link to="/" className="btn btn-success">
                  Order now
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-3" sm={6} md={3}>
            <Card>
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/random/500x400/?fruits"
              />
              <Card.Body>
                <Card.Title>Fruit</Card.Title>
                <Card.Text>
                  Order from the best Fruit in town and enjoy a delicious slice
                  of heaven.
                </Card.Text>
                <Link to="/" className="btn btn-success">
                  Order now
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default LandingPage;
