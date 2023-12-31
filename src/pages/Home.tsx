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
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className="parallax_wrapper">
      <Navigation />
      {/* Header */}
      <header className="bg-cover">
        <Container fluid="lg">
          <Row>
            <Col id="header-text" lg="5" className="mb-3 p-3 p-lg-0">
              <div>
                <h1 className="mt-3 mt-lg-0 mb-4">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus eius totam fuga provident doloremque rerum sit
                  inventore odio ab voluptatem. Aut totam saepe dolorum
                  repudiandae. Aperiam quae maiores iure eveniet?
                </p>
                <Button color="primary" className="mb-3">
                  Learn More
                </Button>
              </div>
            </Col>
            <Col lg={{ offset: 3, size: 9 }} className="p-3 p-lg-0">
              <img
                id="header-image"
                className="img-fluid image"
                src="/images/neom-I5j46lqAo-o-unsplash1920x1281.jpg"
              />
            </Col>
          </Row>
        </Container>
      </header>
      {/* Buttons */}
      <div className="bg-cover">
        <section className="button-container mx-auto">
          <Row className="mx-3 mx-sm-5">
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
        </section>
      </div>
      {/* First section: wide parallax: image - text */}
      <Container fluid className="preserve3d width-1320">
        <Row className="parallax__group">
          <Col lg="6" className="parallax__layer--section-1 px-0">
            <img
              src="/images/neom-4K_x--J2Jbc-unsplash.jpg"
              className="image"
            />
          </Col>
          <Col
            lg="6"
            className="text-wrapper-1 bg-accent d-flex flex-column justify-content-center align-items-center ms-auto p-3 p-sm-5"
          >
            <div className="text-container">
              <h2 className="mb-4">First Section Here</h2>
              <p>{lorem_40}</p>
              <p>{lorem_20}</p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Second section: title - text */}
      <section className="section-container bg-cover text-white">
        <Container fluid="lg">
          <Row>
            <Col lg="6" className="pt-3 px-3 pt-sm-5 px-sm-5 pt-lg-0 px-lg-0">
              <h2 className="mb-4 text-center">
                Second Section With Some Explanation
              </h2>
            </Col>
            <Col lg="6" className="pb-3 px-3 pb-sm-5 px-sm-5 px-lg-0">
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
        </Container>
      </section>
      {/* Wide image parallax*/}
      <Container fluid className="width-1920 preserve3d p-0">
        <section className="parallax__group wide">
          <div className="parallax__layer--section-2">
            <img
              src="/images/neom-9E9NsEiUGxg-unsplash 1920x1280.jpg"
              className="image"
            />
          </div>
        </section>
      </Container>
      {/* Third section: title - text */}
      <section className="section-container bg-cover text-white">
        <Container fluid="lg">
          <Row>
            <Col lg="6" className="pt-3 px-3 pt-sm-5 px-sm-5 pt-lg-0 px-lg-0">
              <h2 className="mb-4 text-center">Third Section, more stuff</h2>
            </Col>
            <Col lg="6" className="pb-3 px-3 pb-sm-5 px-sm-5 px-lg-0">
              <ul>
                <li>{lorem_35}</li>
                <li>{lorem_25}</li>
                <li>{lorem_10}</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Fourth section: wide parallax: text - image */}
      <Container fluid className="preserve3d width-1320">
        <Row className="parallax__group">
          <Col
            lg={{ size: 6, order: 2 }}
            className="parallax__layer--section-3 p-0"
          >
            <img
              src="/images/neom-dulVtESluoM-unsplash 1920x2879.jpg"
              className="image"
            />
          </Col>
          <Col
            lg={{ size: 6, order: 1 }}
            className="text-wrapper-2 bg-accent d-flex flex-column justify-content-center align-items-center p-3 p-sm-5"
          >
            <div className="text-container">
              <h2 className="mb-4">One more section ...</h2>
              <p>{lorem_30}</p>
              <p>{lorem_10}</p>
              <p>{lorem_40}</p>
              <p>{lorem_20}</p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Fifth section: title - text */}
      <section className="section-container bg-cover text-white">
        <Container fluid="lg">
          <Row>
            <Col lg="6" className="pt-3 px-3 pt-sm-5 px-sm-5 pt-lg-0 px-lg-0">
              <h2 className="mb-4 text-center">Last section, conclusion</h2>
            </Col>
            <Col lg="6" className="pb-3 px-3 pb-sm-5 px-sm-5 px-lg-0">
              <p>{lorem_45}</p>
              <p>{lorem_50}</p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
