import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => (
    <div className="about-page">
        <Row className="about-title">
            <h3> About US </h3>
        </Row>
        <Container>
            <Row>
                <h2 className="text-center mt-4">Welcom to BookWorm</h2>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <p>
                            "Bookworm is an independent New York bookstore and
                            language school with locations in Manhattan and
                            Brooklyn. We specialize in travel books and language
                            classes."
                        </p>
                    </Col>
                    <Col md={3}></Col>
                </Row>

                <Row className="mt-5"> 
                    <Col md={2}></Col>
                    <Col md={4}>
                        <h4>Our Story</h4>
                        <p>
                            The name Bookworm was taken from the original name
                            for New York International Airport, which was
                            renamed JFK in December 1963.
                        </p>
                        <p>
                            Our Manhattan store has just moved to the West
                            Village. Our new location is 170 7th Avenue South,
                            at the corner of Perry Street.
                        </p>
                        <p>
                            From March 2008 through May 2016, the store was
                            located in the Flatiron District.
                        </p>
                    </Col>
                    <Col md={4}>
                        <h4>Our Vision</h4>
                        <p>
                            One of the last travel bookstores in the country,
                            our Manhattan store carries a range of guidebooks
                            (all 10% off) to suit the needs and tastes of every
                            traveller and budget.
                        </p>
                        <p>
                            We believe that a novel or travelogue can be just as
                            valuable a key to a place as any guidebook, and our
                            well-read, well-travelled staff is happy to make
                            reading recommendations for any traveller, book
                            lover, or gift giver.
                        </p>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Row>
        </Container>
    </div>
);

export default About;
