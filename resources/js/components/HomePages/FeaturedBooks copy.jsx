import React from 'react'
import {Image, Button,Container} from "react-bootstrap";
import slide from '../../../assets/bookcover/book1.jpg'
import {Link} from "react-router-dom";
import {IoStar, IoStarOutline} from "react-icons/io5";


const FeaturedBooks = () => (
    // <div  className="container mt-2" >
    <Container fluid >
        <div className="row pb-1">
            <div className="col-12 ">
                <h4 className="text-center justify-content-center">Featured</h4>
                <div className="featured-btn mb-3">
                    {/*<Button className="btn btn-info ">View All</Button>*/}
                    <div type="button" className="btn btn-info mr-3">
                        <Link to={"#"} className="btn-featured-link">
                            Recommended
                        </Link>
                    </div>
                    <div type="button" className="btn btn-light ">
                        <Link to={"#"} className="btn-featured-link">
                            Popular
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 on-sale pt-2 pb-2 pl-0 pr-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mb-2">
                            <Link to="#" className="card ">
                                <Image
                                    src={slide}
                                    className="card-img-top img-on-sale"
                                    alt="Card image cap"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>

                                    <p className="card-text">Author</p>
                                    <div className="star-body">
                                        <IoStar className="star-checked" />
                                        <IoStar className="star-checked" />
                                        <IoStar className="star-checked" />
                                        <IoStarOutline />
                                        <IoStarOutline />
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <small className="text-muted">$Price</small>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 mb-2">
                            <Link to="#" className="card">
                                <Image
                                    src={slide}
                                    className="card-img-top"
                                    alt="Card image cap"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Author</p>
                                    <div className="star-body">
                                        <IoStar className="star-checked" />
                                        <IoStar className="star-checked" />
                                        <IoStar className="star-checked" />
                                        <IoStarOutline />
                                        <IoStarOutline />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">$Price</small>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 mb-2">
                            <Link to="#" className="card">
                                <Image
                                    src={slide}
                                    className="card-img-top"
                                    alt="Card image cap"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Author</p>
                                    <div className="star-body">
                                        <IoStar className="star-checked" />
                                        <IoStar className="star-checked" />
                                        <IoStar className="star-checked" />
                                        <IoStarOutline />
                                        <IoStarOutline />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">$Price</small>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 mb-2">
                            <Link to="#" className="card">
                                <Image
                                    src={slide}
                                    className="card-img-top"
                                    alt="Card image cap"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Author</p>
                                    <div className="star-body">
                                        <IoStar className="star-checked" />
                                        <IoStar className="star-checked" />
                                        <IoStar className="star-checked" />
                                        <IoStarOutline />
                                        <IoStarOutline />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">$Price</small>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 mb-2">
                            <Link to="#" className="card ">
                                <Image
                                    src={slide}
                                    className="card-img-top img-on-sale"
                                    alt="Card image cap"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>

                                    <p className="card-text">Author</p>
                                    <div className="star-body">
                                        <IoStar className="star-checked" />
                                        <IoStar className="star-checked" />
                                        <IoStar className="star-checked" />
                                        <IoStarOutline />
                                        <IoStarOutline />
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <small className="text-muted">$Price</small>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 mb-2">
                            <Link to="#" className="card">
                                <Image
                                    src={slide}
                                    className="card-img-top"
                                    alt="Card image cap"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Author</p>
                                    <div className="star-body">
                                        <IoStar className="star-checked" />
                                        <IoStar className="star-checked" />
                                        <IoStar className="star-checked" />
                                        <IoStarOutline />
                                        <IoStarOutline />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">$Price</small>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 mb-2">
                            <Link to="#" className="card">
                                <Image
                                    src={slide}
                                    className="card-img-top"
                                    alt="Card image cap"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Author</p>
                                    <div className="star-body">
                                        <IoStar className="star-checked" />
                                        <IoStar className="star-checked" />
                                        <IoStar className="star-checked" />
                                        <IoStarOutline />
                                        <IoStarOutline />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">$Price</small>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 mb-2">
                            <Link to="#" className="card">
                                <Image
                                    src={slide}
                                    className="card-img-top"
                                    alt="Card image cap"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Author</p>
                                    <div className="star-body">
                                        <IoStar className="star-checked" />
                                        <IoStar className="star-checked" />
                                        <IoStar className="star-checked" />
                                        <IoStarOutline />
                                        <IoStarOutline />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">$Price</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>
    </Container>
);

export default FeaturedBooks
