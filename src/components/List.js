import "../styles/List.css";
import logo from "../assets/images/logo.svg";
import arrow from "../assets/icons/Arrow-right-brown.svg";
import arrow_left from "../assets/icons/Arrow-left.svg";
import arrow_right from "../assets/icons/Arrow-right.svg";
import message from "../assets/icons/Messages.svg";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import { getListData } from "../api/api";

export default function List() {
  const [order, setOrder] = useState("time");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getListData();
        setData(res.results);
        setTotalPages(Math.ceil(res.count / 8));
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  const handleSortOrderChange = (selectedOrder) => {
    setOrder(selectedOrder);
  };

  const handlePageChange = (page) => {
    if (
      page < 1 ||
      page > totalPages ||
      (page === 1 && currentPage === 1) ||
      (page === totalPages && currentPage === totalPages)
    )
      return;
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <div
          key={i}
          onClick={() => handlePageChange(i)}
          className={"pageBtn " + (currentPage === i ? "active" : "")}
        >
          {i}
        </div>
      );
    }
    return pageNumbers;
  };

  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="list-header">
        <Link to="/">
          <img src={logo} alt="logo" className="list-logo" />
        </Link>
        <Link to="/post/:id/answer" className="list-answer-button">
          <span>답변하러 가기</span>
          <img src={arrow} alt="arrow" />
        </Link>
      </div>
      <div className="list-main">
        <h1 className="list-main-text">누구에게 질문할까요?</h1>
        <Dropdown onChange={handleSortOrderChange} />
        <div className="list-subjects">
          {currentItems.map((item) => (
            <Link to={`/post/${item.id}`} key={item.id}>
              <div className="list-subject-container">
                <div className="list-profile-container">
                  <div className="list-profile">
                    <img
                      className="list-profile-img"
                      src={item.imageSource}
                      alt="profile-img"
                    />
                  </div>
                  <p className="list-profile-name">{item.name}</p>
                </div>
                <div className="list-info-container">
                  <div className="list-info">
                    <img
                      src={message}
                      className="list-info-img"
                      alt="message"
                    />
                    <p className="list-info-text">받은 질문</p>
                  </div>
                  <p className="list-info-count">{item.questionCount}개</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="Pagnation">
        <div className="pageBtn">
          <img
            src={arrow_left}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            alt="arrow_left"
          />
        </div>
        {renderPagination()}
        <div className="pageBtn">
          <img
            src={arrow_right}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            alt="arrow_right"
          />
        </div>
      </div>
    </>
  );
}
