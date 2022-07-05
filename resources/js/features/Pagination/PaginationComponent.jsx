import React, { useState } from "react";
import Pagination from "react-js-pagination";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function PaginationComponent(props) {
    //Return pagination UI
    // console.log("page", props);
    const initialPage = {
        totalRecords: 0,
        activePage: 1,
        limit: 0,
    };
    const [dadaPage, setPage] = useState(initialPage);
    const handlePageChange = (page) => {
        setPage({
            activePage: page,
        });

        props.currentPage(page);
    };
    // console.log("aaav", dadaPage);

    return (
        <div className="pagination-wrapper" style={{ marginLeft: "30%" }}>
            <Pagination
                aria-label="Page navigation example"
                itemClass="page-item"
                linkClass="page-link"
                prevPageText="Prev"
                nextPageText="Next"
                firstPageText="First"
                lastPageText="Last"
                activePage={dadaPage.activePage}
                itemsCountPerPage={props.itemsCountPerPage}
                totalItemsCount={props.totalRecords}
                onChange={handlePageChange}
            />
        </div>
    );
}
