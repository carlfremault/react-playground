import { Container, Col, Row, Button } from 'reactstrap';

const Home = () => {
  return (
    <>
      <Container fluid="lg" className="pt-4 pt-lg-0 mb-5">
        <Row className="position-relative">
          <Col id="header-text" className="mb-4" lg="5">
            <div>
              <h1 className="mt-3 mt-lg-0">Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus eius totam fuga provident doloremque rerum sit
                inventore odio ab voluptatem. Aut totam saepe dolorum
                repudiandae. Aperiam quae maiores iure eveniet?
              </p>
              <Button color="primary">Learn More</Button>
            </div>
          </Col>
          <Col
            lg={{ offset: 3, size: 9 }}
            className="d-lg-flex justify-content-lg-end p-0"
          >
            <img
              id="header"
              className="img-fluid"
              src="/images/neom-I5j46lqAo-o-unsplash1920x1281.jpg"
            />
          </Col>
        </Row>
      </Container>
      <Container fluid="sm" className="mb-5" style={{ maxWidth: '720px' }}>
        <Row className="mx-5">
          <Col xs="6" md="3" className="p-1">
            <Button color="primary" className="w-100">
              Wie
            </Button>
          </Col>
          <Col xs="6" md="3" className="p-1">
            <Button color="primary" className="w-100">
              Wat
            </Button>
          </Col>

          <Col xs="6" md="3" className="p-1">
            <Button color="primary" className="w-100">
              Voordelen
            </Button>
          </Col>
          <Col xs="6" md="3" className="p-1">
            <Button color="primary" className="w-100">
              Waar
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
