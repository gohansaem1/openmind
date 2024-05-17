import React from "react";
import arrow_left from "../../assets/icons/Arrow-left.svg";
import arrow_right from "../../assets/icons/Arrow-right.svg";
import arrow_left_gray from "../../assets/icons/Arrow-left-gray.svg";
import arrow_right_gray from "../../assets/icons/Arrow-right-gray.svg";

const ELLIPSIS = "···";

export default function Pagination({ totalPages, currentPage, onPageChange }) {
    const pageNumbers = [];

    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <div
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={`pageBtn ${currentPage === i ? "active" : ""}`}>
                    {i}
                </div>
            );
        }
    } else {
        if (currentPage <= 4) {
            for (let i = 1; i <= 5; i++) {
                pageNumbers.push(
                    <div
                        key={i}
                        onClick={() => onPageChange(i)}
                        className={`pageBtn ${currentPage === i ? "active" : ""}`}>
                        {i}
                    </div>
                );
            }
            pageNumbers.push(
                <div key="ellipsis1" className="pageBtn ellipsis">
                    {ELLIPSIS}
                </div>
            );
            pageNumbers.push(
                <div
                    key={totalPages}
                    onClick={() => onPageChange(totalPages)}
                    className={`pageBtn ${currentPage === totalPages ? "active" : ""}`}>
                    {totalPages}
                </div>
            );
        } else if (currentPage >= totalPages - 3) {
            pageNumbers.push(
                <div
                    key={1}
                    onClick={() => onPageChange(1)}
                    className={`pageBtn ${currentPage === 1 ? "active" : ""}`}>
                    {1}
                </div>
            );
            pageNumbers.push(
                <div key="ellipsis1" className="pageBtn ellipsis">
                    {ELLIPSIS}
                </div>
            );
            for (let i = totalPages - 4; i <= totalPages; i++) {
                pageNumbers.push(
                    <div
                        key={i}
                        onClick={() => onPageChange(i)}
                        className={`pageBtn ${currentPage === i ? "active" : ""}`}>
                        {i}
                    </div>
                );
            }
        } else {
            pageNumbers.push(
                <div
                    key={1}
                    onClick={() => onPageChange(1)}
                    className={`pageBtn ${currentPage === 1 ? "active" : ""}`}>
                    {1}
                </div>
            );
            pageNumbers.push(
                <div key="ellipsis1" className="pageBtn ellipsis">
                    {ELLIPSIS}
                </div>
            );
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                pageNumbers.push(
                    <div
                        key={i}
                        onClick={() => onPageChange(i)}
                        className={`pageBtn ${currentPage === i ? "active" : ""}`}>
                        {i}
                    </div>
                );
            }
            pageNumbers.push(
                <div key="ellipsis2" className="pageBtn ellipsis">
                    {ELLIPSIS}
                </div>
            );
            pageNumbers.push(
                <div
                    key={totalPages}
                    onClick={() => onPageChange(totalPages)}
                    className={`pageBtn ${currentPage === totalPages ? "active" : ""}`}>
                    {totalPages}
                </div>
            );
        }
    }

    return (
        <div className="pagination">
            <img
                src={currentPage === 1 ? arrow_left_gray : arrow_left}
                className={`pageBtn ${currentPage === 1 ? "disabled" : ""}`}
                onClick={() => onPageChange(currentPage - 1)}
                alt="arrow_left"
            />
            {pageNumbers}
            <img
                src={
                    currentPage === totalPages ? arrow_right_gray : arrow_right
                }
                className={`pageBtn ${currentPage === totalPages ? "disabled" : ""}`}
                onClick={() => onPageChange(currentPage + 1)}
                alt="arrow_right"
            />
        </div>
    );
}
