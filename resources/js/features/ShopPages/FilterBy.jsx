import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { IoStar } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authorAction, selectAuthorList } from "../../redux/Author/authorSlide";
import {
    categoryAction,
    selectCategoryList,
} from "../../redux/Category/CategorySlide";
export default function FilterBy({
    onFilterByCategory,
    onFilterByAuthor,
    onFilterByStar,
}) {
    // ***********************************
    // Category
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(categoryAction.fetchCategoryList());
    }, [dispatch]);
    // getData Category
    const categoryList = useSelector(selectCategoryList);

    const [activeCate, setActive] = useState(0);
    const onChangeActiveCategory = (e) => {
        setActive(e.target.id);
        setActiveStar(0);
        if (!onFilterByCategory) return;
        onFilterByCategory(e.target.id);
    };

    // getData Author
    useEffect(() => {
        dispatch(authorAction.fetchAuthorList());
    }, [dispatch]);
    const authorList = useSelector(selectAuthorList);

    const [activeAuthor, setActiveAuthor] = useState(0);
    const onChangeActiveAuthor = (e) => {
        setActiveAuthor(e.target.id);
        setActiveStar(0);
        if (!onFilterByAuthor) return;
        onFilterByAuthor(e.target.id);
    };

    //fetData Star
    const [activeStar, setActiveStar] = useState(0);
    const onChangeActiveStar = (e) => {
        setActiveStar(e.target.id);
        if (!onFilterByStar) return;
        onFilterByStar(e.target.id);
    };
    return (
        <div>
            <h5 className="shop-page-filter-header">Filter By</h5>
            <div>
                <h5>Category</h5>
            </div>

            <Row className="shop-page-filter-category mb-4 ">
                <Link
                    className={`list-group-item list-group-item-action ${
                        activeCate == "0" ? "active" : ""
                    } `}
                    id={"0"}
                    data-toggle="list"
                    to=""
                    role="tab"
                    aria-controls="home"
                    value={"a"}
                    onClick={onChangeActiveCategory}
                >
                    All
                </Link>
                {categoryList.map((itemCate, index) => (
                    <Link
                        className={`list-group-item list-group-item-action ${
                            activeCate == itemCate.id ? "active" : ""
                        } `}
                        id={itemCate.id}
                        data-toggle="list"
                        to=""
                        role="tab"
                        aria-controls="home"
                        value={itemCate.id}
                        onClick={onChangeActiveCategory}
                    >
                        {itemCate.category_name.charAt(0).toUpperCase() +
                            itemCate.category_name.slice(1)}
                    </Link>
                ))}
            </Row>
            <div>
                <h5>Author</h5>
            </div>
            <Row className="shop-page-filter-category mb-4 ">
                <Link
                    className={`list-group-item list-group-item-action ${
                        activeAuthor == "0" ? "active" : ""
                    } `}
                    id={"0"}
                    data-toggle="list"
                    to=""
                    role="tab"
                    aria-controls="home"
                    onClick={onChangeActiveAuthor}
                >
                    All
                </Link>
                {authorList.map((itemAuthor, index) => (
                    <Link
                        key={index}
                        className={`list-group-item list-group-item-action  ${
                            activeAuthor == itemAuthor.id ? "active" : ""
                        } `}
                        id={itemAuthor.id}
                        data-toggle="list"
                        to=""
                        role="tab"
                        aria-controls="home"
                        value={itemAuthor.id}
                        onClick={onChangeActiveAuthor}
                    >
                        {itemAuthor.author_name.charAt(0).toUpperCase() +
                            itemAuthor.author_name.slice(1)}
                    </Link>
                ))}
            </Row>
            <div>
                <h5>Star</h5>
            </div>
            <Row className="shop-page-filter-category mb-4 ">
                <Link
                    key={1}
                    className={` list-group-item list-group-item-action ${
                        activeStar == 0 ? "active" : ""
                    }`}
                    id="0"
                    data-toggle="list"
                    to=""
                    role="tab"
                    onClick={onChangeActiveStar}
                    variant=""
                >
                    All
                </Link>
                <Link
                    className={`list-group-item list-group-item-action ${
                        activeStar == 1 ? "active" : ""
                    }`}
                    id="1"
                    data-toggle="list"
                    to=""
                    role="tab"
                    onClick={onChangeActiveStar}
                >
                    1 Star <IoStar className="star-checked" />
                </Link>
                <Link
                    className={`list-group-item list-group-item-action ${
                        activeStar == 2 ? "active" : ""
                    }`}
                    id="2"
                    data-toggle="list"
                    to=""
                    role="tab"
                    onClick={onChangeActiveStar}
                >
                    2 Star <IoStar className="star-checked" />
                </Link>
                <Link
                    className={`list-group-item list-group-item-action ${
                        activeStar == 3 ? "active" : ""
                    }`}
                    id="3"
                    data-toggle="list"
                    to=""
                    role="tab"
                    onClick={onChangeActiveStar}
                >
                    3 Star <IoStar className="star-checked" />
                </Link>
                <Link
                    className={`list-group-item list-group-item-action ${
                        activeStar == 4 ? "active" : ""
                    }`}
                    id="4"
                    data-toggle="list"
                    to=""
                    role="tab"
                    onClick={onChangeActiveStar}
                >
                    4 Star <IoStar className="star-checked" />
                </Link>
                <Link
                    className={`list-group-item list-group-item-action ${
                        activeStar == 5 ? "active" : ""
                    }`}
                    id="5"
                    data-toggle="list"
                    to=""
                    role="tab"
                    onClick={onChangeActiveStar}
                >
                    5 Star <IoStar className="star-checked" />
                </Link>
            </Row>
        </div>
    );
}
