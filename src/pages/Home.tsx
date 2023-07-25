import { Container, Col, Row, Button } from 'reactstrap';

const Home = () => {
  return (
    <>
      <Container fluid="lg" className="pt-4 pt-lg-0 mb-5">
        <Row>
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
          <Col lg={{ offset: 3, size: 9 }} className="p-0">
            <img
              id="header-image"
              className="img-fluid"
              src="/images/neom-I5j46lqAo-o-unsplash1920x1281.jpg"
            />
          </Col>
        </Row>
      </Container>
      <section>
        <Container fluid="sm" className="mb-5" style={{ maxWidth: '720px' }}>
          <Row className="mx-5">
            <Col xs="6" md="3" className="p-1">
              <Button color="primary" className="w-100">
                Who
              </Button>
            </Col>
            <Col xs="6" md="3" className="p-1">
              <Button color="primary" className="w-100">
                What
              </Button>
            </Col>

            <Col xs="6" md="3" className="p-1">
              <Button color="primary" className="w-100">
                Where
              </Button>
            </Col>
            <Col xs="6" md="3" className="p-1">
              <Button color="primary" className="w-100">
                Why
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid="lg" className="pt-4 pt-lg-0 mb-5">
          <Row>
            <Col lg="8" className="p-0">
              <img
                id="p1-image"
                className="img-fluid"
                src="/images/neom-4K_x--J2Jbc-unsplash.jpg"
              />
            </Col>
            <Col lg="4" className="p-3">
              <p className="p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                est iure deserunt natus temporibus molestiae in ea, quis, eum
                corporis incidunt reiciendis sed recusandae distinctio repellat
                debitis minus eligendi iusto adipisci. Iste odit reiciendis
                facere, doloremque vel expedita, perspiciatis sapiente et
                dolorem repellat pariatur exercitationem suscipit nulla! Ipsa,
                illum iure?
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid="lg" className="pt-4 pt-lg-0 mb-5">
          <Row>
            <Col lg="8" className="p-0">
              <img
                id="p1-image"
                className="img-fluid"
                src="/images/neom-4K_x--J2Jbc-unsplash.jpg"
              />
            </Col>
            <Col lg="4" className="p-3">
              <p className="p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                est iure deserunt natus temporibus molestiae in ea, quis, eum
                corporis incidunt reiciendis sed recusandae distinctio repellat
                debitis minus eligendi iusto adipisci. Iste odit reiciendis
                facere, doloremque vel expedita, perspiciatis sapiente et
                dolorem repellat pariatur exercitationem suscipit nulla! Ipsa,
                illum iure?
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
