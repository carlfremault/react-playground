import { Container, Col, Row, Button } from 'reactstrap';
import {
  lorem_5,
  lorem_10,
  lorem_15,
  lorem_20,
  lorem_25,
  lorem_30,
  lorem_35,
  lorem_40,
  lorem_45,
  lorem_50,
} from '../utils/lorem';

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
      {/* First section: image - text (wide) */}
      <Container fluid className="p-0">
        <section className="wide-section">
          <Row>
            <Col lg="6" className="p-0">
              <img src="/images/neom-4K_x--J2Jbc-unsplash.jpg" />
            </Col>
            <Col
              lg="6"
              className="d-flex flex-column justify-content-center align-items-center p-3 p-sm-5 px-lg-0"
            >
              <div className="text-container">
                <h2 className="mb-4">First Section Here</h2>
                <p className="">{lorem_40}</p>
                <p>{lorem_20}</p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      {/* Second section: title - text */}
      <Container fluid="xl" className="p-0">
        <section className="section-container">
          <Row className="p-3 p-sm-5">
            <Col lg="6" className="p-0">
              <h2 className="mb-4">Second Section With Some Explanation</h2>
            </Col>
            <Col lg="6" className="p-0">
              <p>{lorem_15}</p>
              <p>{lorem_10}</p>
              <ul>
                <li>{lorem_20}</li>
                <li>{lorem_5}</li>
                <li>{lorem_10}</li>
              </ul>
              <p>{lorem_15}</p>
            </Col>
          </Row>
        </section>
      </Container>
      {/* Wide image */}
      <Container fluid className="p-0">
        <img
          src="/images/neom-9E9NsEiUGxg-unsplash 1920x1280.jpg"
          className="wide-image"
        />
      </Container>
      {/* Third section: title - text */}
      <Container fluid="lg" className="p-0">
        <section className="section-container">
          <Row className="p-3 p-sm-5">
            <Col lg="6" className="p-0">
              <h2 className="mb-4">Third Section, more stuff</h2>
            </Col>
            <Col lg="6" className="p-0">
              <ul>
                <li>{lorem_35}</li>
                <li>{lorem_25}</li>
                <li>{lorem_10}</li>
              </ul>
            </Col>
          </Row>
        </section>
      </Container>
      {/* Foruth section: text - image (wide) */}
      <Container fluid className="p-0">
        <section className="wide-section">
          <Row>
            <Col lg={{ size: 6, order: 2 }} className="vertical-image p-0">
              <img src="/images/neom-dulVtESluoM-unsplash 1920x2879.jpg" />
            </Col>
            <Col
              lg={{ size: 6, order: 1 }}
              className="d-flex flex-column justify-content-center align-items-center p-3 p-sm-5 px-lg-0"
            >
              <div className="text-container">
                <h2 className="mb-4">One more section ...</h2>
                <p className="">{lorem_30}</p>
                <p>{lorem_20}</p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      {/* Fifth section: title - text */}
      <Container fluid="lg" className="p-0">
        <section className="section-container">
          <Row className="p-3 p-sm-5">
            <Col lg="6" className="p-0">
              <h2 className="mb-4">Last section, conclusion</h2>
            </Col>
            <Col lg="6" className="p-0">
              <p>{lorem_45}</p>
              <p>{lorem_50}</p>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Home;
