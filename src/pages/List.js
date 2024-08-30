import React, { useEffect, useState } from "react";
import { getListData } from "../api/api";
import { useMediaQuery } from "react-responsive";
import Dropdown from "../components/list/Dropdown";
import ListItem from "../components/list/ListItem";
import Pagination from "../components/list/Pagination";
import ListHeader from "../components/list/ListHeader";
import "../styles/List.css";
import Search from "../components/list/Search";

export default function ListPage() {
    const [order, setOrder] = useState("time");
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [searchTerm, setSearchTerm] = useState("");
    const TABLET_WIDTH = 1024;
    const MOBILE_WIDTH = 768;

    const userId = localStorage.getItem("userId");

    const isTablet = useMediaQuery({
        query: `(max-width: ${TABLET_WIDTH}px)`,
    });

    const isMobile = useMediaQuery({
        query: `(max-width: ${MOBILE_WIDTH}px)`,
    });

    function renderPageButtons(length, isTablet, isMobile) {
        const size = isTablet || isMobile ? 6 : 8;
        setItemsPerPage(size);
        setTotalPages(Math.ceil(length / size) === 0 ? 1 : Math.ceil(length / size));
    }

    const handleSortOrderChange = (selectedOrder) => {
        setOrder(selectedOrder);
    };

    const sortData = (data, order) => {
        if (order === "time") {
            return data
                .slice()
                .sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (order === "name") {
            return data.slice().sort((a, b) => a.name.localeCompare(b.name));
        }
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

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    
    const filteredData = data.filter(item =>
        item.name.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
    );
    
    const currentItems = sortData(filteredData, order).slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getListData();
                setData(res.results);
                renderPageButtons(res.count, isTablet, isMobile);
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        renderPageButtons(filteredData.length, isTablet, isMobile);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filteredData.length, isTablet, isMobile]);

    return (
        <div className="list-container">
            <ListHeader userId={userId} />
            <div className="list-main">
                <div className="list-main-header">
                    <h1 className="list-main-text">누구에게 질문할까요??</h1>
                    <div className="list-main-head">
                        <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                        <Dropdown onChange={handleSortOrderChange} />
                    </div>
                </div>
                <div className="list-subjects">
                    {currentItems.map((item) => (
                        <ListItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
