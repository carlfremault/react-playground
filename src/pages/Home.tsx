import { Container, Col, Row, Button } from 'reactstrap';

const Home = () => {
  return (
    <>
      {/* Header */}
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
      {/* Buttons */}
      <section>
        <Container
          fluid="sm"
          className="button-container"
          style={{ maxWidth: '720px' }}
        >
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
      {/* First section: image - text */}
      <section id="first-section" className="mb-5">
        <div className="mb-5">
          <Row style={{ margin: '0', padding: '0' }}>
            <Col lg="6" className="p-0">
              <img src="/images/neom-4K_x--J2Jbc-unsplash.jpg" />
            </Col>
            <Col
              lg="6"
              className="d-flex justify-content-center align-items-center p-3"
            >
              <div className="text-container p-0 p-sm-5 p-lg-0">
                <h2 className="mb-4">First Section Here</h2>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae est iure deserunt natus temporibus molestiae in ea,
                  quis, eum corporis incidunt reiciendis sed recusandae
                  distinctio repellat debitis minus eligendi iusto adipisci.
                  Iste odit reiciendis facere, doloremque vel expedita,
                  perspiciatis sapiente et dolorem repellat pariatur
                  exercitationem suscipit nulla! Ipsa, illum iure?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  commodi fugiat optio nesciunt laborum, illum corrupti debitis
                  reprehenderit aperiam id?
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* Second section: title - text */}
      <section className="mb-5">
        <div className="content-container">
          <Row style={{ margin: '0', padding: '0' }}>
            <Col lg="6">
              <h2 className="px-sm-5 mb-4 ms-lg-5">
                Second Section With Some Explanation
              </h2>
            </Col>
            <Col lg="6">
              <div className="text-container p-0 px-sm-5 p-lg-0">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloremque, necessitatibus est porro quas perferendis facere?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quam, ut!
                </p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae, possimus magni?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil consequuntur aperiam optio molestiae ex.
                  </li>
                </ul>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum tempore pariatur eius.
                </p>
              </div>
            </Col>
          </Row>
        </div>
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
