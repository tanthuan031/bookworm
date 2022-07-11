import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bookActions, selectBookId } from "../../redux/Books/bookSlice";
import ProductDetail from "./ProductDetail";
export default function ProductPage() {
    //  const bookList = useSelector(selectBookList);

    const bookId = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            bookActions.fetchBookId({
                idBook: bookId,
            })
        );
    }, [dispatch]);
    const getBookId = useSelector(selectBookId);
    return (
        <Container className="margin-Top">
            <Row className="about-title">
                <h3>
                    Category: {(getBookId.category_name + "").toUpperCase()}
                </h3>
            </Row>
            <ProductDetail />
        </Container>
    );
}
